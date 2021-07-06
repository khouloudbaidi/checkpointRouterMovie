import React from "react";
import MoviCard from "../MoviCard/MoviCard";
import "./MoviList.css";

const MoviList = ({ movies, input, rating, AddMovie }) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(input.toUpperCase()) &&
            movie.rating >= rating
        )
        .map((movie) => (
          <MoviCard movie={movie} key={movie.id} />
        ))}
      <MoviCard AddMovie={AddMovie} addMovieCard={true} />
    </div>
  );
};

export default MoviList;
