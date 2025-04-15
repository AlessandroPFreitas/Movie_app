import React, { useContext } from "react";
import Format from "./Format";
import { SelectMovie } from "../App";
const MovieDetails = () => {
  const { selectMovie, setSelectMovie } = useContext(SelectMovie);
  const {
    overview,
    genres,
    status,
    spoken_languages = [],
    budget,
    revenue,
    tagline,
    production_companies,
    production_countries,
    release_date,
  } = selectMovie;

  const languagesString = spoken_languages
    .filter((language) => language && language.english_name)
    .map((language) => language.english_name)
    .join(" • ");

  const companies = production_companies
    .filter((companie) => companie && companie.name)
    .map((companie) => companie.name)
    .join(" • ");

  const countries = production_countries
    .filter((countrie) => countrie && countrie.name)
    .map((countrie) => countrie.name)
    .join(" • ");

  return (
    <section className="movie-details">
      <div className="movie-info">
        <div className="generes">
          <h2>Generes</h2>
          <div>
            {genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div className="realease-data">
          <h2>Release date</h2>
          <p>{release_date}</p>
        </div>
        <div className="countries">
          <h2>Countries</h2>
          <p>{countries}</p>
        </div>
        <div className="status">
          <h2>Status</h2>
          <p>{status}</p>
        </div>
        <div className="language">
          <h2>Language</h2>
          <p>{languagesString}</p>
        </div>
        <div className="budget">
          <h2>Budget</h2>
          <p>
            <Format value={budget} />
          </p>
        </div>

        <div className="revenue">
          <h2>Revenue</h2>
          <p>
            <Format value={revenue} />
          </p>
        </div>

        <div className="tagline">
          <h2>Tagline</h2>
          <p>{tagline}</p>
        </div>

        <div className="companies">
          <h2>Production Companies</h2>
          <p>{companies}</p>
        </div>
      </div>

      <div className="button">
        <button
          onClick={() => {
            setSelectMovie(null);
          }}
        >
          Visit Homepage <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default MovieDetails;
