import Movie from "./components/Movie.jsx";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  useDebounce( () => {setDebounceSearchTerm(searchTerm);}, 500, [searchTerm]);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_URL}//search/movie?query=${encodeURIComponent(query)}`
        : `${API_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.total_results == 0) {
        setErrorMessage("This film does not exist");
        return;
      }

      setMovieList(data.results);
    } catch (error) {
      console.error(`Error to fetch movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll enjoy
            without the Hassle.
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <section className="all-movies">
          <h2 className="my-[30px]">All movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage} </p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default App;
