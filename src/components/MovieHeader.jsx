import React, { useContext } from "react";
import { SelectMovie } from "../App";
const MovieHeader = () => {
  const { selectMovie } = useContext(SelectMovie);
  const { title, release_date, runtime, vote_average, popularity } =
    selectMovie;

  const movieTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    const time = `${hours}h ${min}m`;
    return time;
  };

  const moviePopularity = (pop) => {
    const popularity = Math.floor(pop);
    return `${popularity}K`;
  };

  return (
    <>
      <section className="movie-header">
        <h1>{title}</h1>
        <div className="header-stats">
          <p>
            ⭐ <span>{String(vote_average).slice(0, 3)}</span>/10(
            {moviePopularity(popularity)})
          </p>
          <div className="stats-populary">
            <img src="./Icons.svg" alt="Score" />
            <span>1</span>
          </div>
        </div>
      </section>
      <div className="header-info">
        <p>{release_date.split("-")[0]}</p>
        <span>•</span>
        <p>{movieTime(runtime)}</p>
      </div>
    </>
  );
};

export default MovieHeader;
