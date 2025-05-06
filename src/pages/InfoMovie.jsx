import MovieHeader from "../components/MovieHeader";
import MovieImages from "../components/MovieImages";
import MovieDetails from "../components/MovieDetails";

const InfoMovie = () => {

  return (
    <div className="movie-wrapper">
      <section className="movie-bg">
        <MovieHeader />
        <MovieImages />
        <MovieDetails />
      </section>
    </div>
  );
};

export default InfoMovie;
