import React from "react";
import Movie from "../movie/Movie";
import "./List.css";
import { moviesData } from "../../constants/Data";
const List = () => {
  return (
    <div className="list">
      {moviesData.map((movies) => (
        <Movie movies={movies} />
      ))}
    </div>
  );
};

export default List;
