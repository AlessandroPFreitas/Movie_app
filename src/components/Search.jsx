import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {

  
  return (
    <div className="search">
      <div className="relative flex items-center">
        <img src="./search.svg" alt="Search Imagem" className="ml-2" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
