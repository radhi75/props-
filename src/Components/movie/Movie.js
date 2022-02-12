import React from "react";
import "./Movie.css";
import { Rating } from "@mui/material";
const Movie = ({ movies }) => {
  return (
    <div className="wrapper">
      <img src={movies.image} alt="" className="poster" />
      <div className="description">
        <div className="details">
          <h1 className="title">{movies.name}</h1>
          <p className="gen">
            {movies.date} || {movies.type}{" "}
          </p>
          <Rating
            name="read-only"
            value={movies.rating}
            readOnly
            className="score"
          />
          <span className="para">{movies.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
