import React, { useState } from "react";
import MoviList from "./MoviList/MoviList";
import FilterByName from "./filterbyName/filterbyName";
import FilterByRating from "./Rating/Rating";
import data from "./data";

const MovieApp = () => {
  const [movies, setMovies] = useState(data);
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(1);

  const AddMovie = (newMovies) => {
    setMovies([...movies, newMovies]);
  };

  return (
    <div>
      <div>
        <FilterByName input={input} setInput={setInput} />
        <FilterByRating
          filterRate={true}
          rating={rating}
          setRating={setRating}
        />
      </div>
      <MoviList
        movies={movies}
        input={input}
        rating={rating}
        AddMovie={AddMovie}
      />
    </div>
  );
};
export default MovieApp;
