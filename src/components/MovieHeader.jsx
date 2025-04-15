import React, { useContext } from "react";
import { SelectMovie } from "../App";
const MovieHeader = () => {
  const {selectMovie} = useContext(SelectMovie);
  const { title, release_date } = selectMovie;
  return (
    <>
      <section className="movie-header">
        <h1>{title}</h1>
        <div className="header-stats">
          <p> ⭐ 9.0/10(200k)</p>
          <div className="stats-populary">
            <img src="./Icons.svg" alt="Score" />
            <span>1</span>
          </div>
        </div>
      </section>
      <div className="header-info">
        <p>{release_date.split("-")[0]}</p>
        <span>•</span>
        <p>PG-13</p>
        <span>•</span>
        <p>2h 46m</p>
      </div>
    </>
  );
};

export default MovieHeader;
