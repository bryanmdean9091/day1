import React from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import "./MovieList.css";

export default function MovieList(props) {
  const { movieList } = props;
  return (
    <>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          type="b"
          posterUrl={movie.Poster}
        />
      ))}
    </>
  );
}

MovieCard.propTypes = {
  movieList: PropTypes.array,
};
