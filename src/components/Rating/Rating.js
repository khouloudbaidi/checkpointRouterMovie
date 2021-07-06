import React from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ rating, setRating, filterRate, movieRating }) => {
  const handleChange = (value) => {
    setRating(value);
  };

  return (
    <span>
      {filterRate ? (
        <Rate tooltips={desc} onChange={handleChange} value={rating} />
      ) : (
        <Rate value={movieRating} disabled />
      )}
    </span>
  );
};

export default Rating;
