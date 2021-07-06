import React, { useState } from "react";
import MoviList from "./MoviList/MoviList";
import FilterByName from "./filterbyName/filterbyName";
import FilterByRating from "./Rating/Rating";
import data from "./data";
import { Switch, Route } from "react-router-dom";
import Movies from "./Movies";

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
      <Switch>
        <Route path="/movies/:id" component={Movies} />
      </Switch>
    </div>
  );
};
export default MovieApp;
