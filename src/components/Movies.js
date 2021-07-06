import React from "react";
import { Button } from "react-bootstrap";

const Movies = ({ history, location }) => {
  const movie = location.state;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.img} alt={movie.title} />
      <Button variant="secondary" onClick={() => history.goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default Movies;
