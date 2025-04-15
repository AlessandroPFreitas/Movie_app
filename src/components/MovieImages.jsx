import React, { useContext } from "react";
import { SelectMovie } from "../App";

const MovieImages = () => {
  const {selectMovie} = useContext(SelectMovie);
  const { backdrop_path, poster_path } = selectMovie;
  return (
    <div className="movie-images">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : "./No-Poster.png"
        }
        alt=""
      />

      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/original${backdrop_path}`
            : "./No-poster.png"
        }
        alt=""
      />
    </div>
  );
};

export default MovieImages;
