import { ID } from "appwrite";
import React from "react"; 
import MovieHeader from "./MovieHeader";
import MovieImages from "./MovieImages";
import MovieDetails from "./MovieDetails";

const InfoMovie = ({
  movie: {
    title,
    release_date,
    poster_path,
    backdrop_path,
    overview,
    status,
    spoken_languages,
    budget,
    revenue,
    tagline,
    production_companies,
    production_countries,
    genres
  }, selectMovie
}) => {
  const boxShadow = {
    boxShadow:
      "0px 12px 32px 0px rgba(206, 206, 251, 0.02) inset, 0px 0px 100px 0px rgba(171, 139, 255, 0.3)",
    borderRadius: "6px",
    width: "85%",
    margin: "auto",
  };

  return (
    <section style={boxShadow} className="rounded-2xl text-white p-[50px]">
      <MovieHeader title={title} release_date={release_date} />
      <MovieImages backdrop_path={backdrop_path} poster_path={poster_path} />
      <MovieDetails
        overview={overview}
        status={status}
        spoken_languages={spoken_languages}
        budget={budget}
        revenue={revenue}
        tagline={tagline}
        production_companies={production_companies}
        release_date={release_date}
        genres={genres}
        production_countries={production_countries}
        selectMovie={selectMovie}
      />
    </section>
  );
};

export default InfoMovie;
