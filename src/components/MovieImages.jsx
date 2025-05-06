import React, { useContext } from "react";
import { SelectMovie } from "../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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

<div className="trailer">
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/original${backdrop_path}`
            : "./No-poster.png"
        }
        alt=""
      />
<button className="playTrailer"><FontAwesomeIcon icon={faPlay} style={{color: "#ffffff", marginRight: 17}} />  Trailer • 00:31 </button>
</div>
    </div>
  );
};

export default MovieImages;
