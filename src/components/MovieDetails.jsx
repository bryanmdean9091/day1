import React, { useState, useEffect } from "react";
// import { getMoviesByName } from "../Utils";
import "./movie-details.css";
// import {setMovieName} from './Movies'
import "./Movies";

export default function MovieDetails({ movie }) {
  const [movies, setMovies] = useState([]);
  return (
    <div className="fb-container">
      <div className="poster-box">
        <img src={movies.Poster} alt={movies.Title} />
        <button>Get Movie</button>
      </div>
      <div className=" fbc-2">
        <div className="title">
          <h1>{movies.Title}</h1>
        </div>
        <div className="fbc-3">
          <h5>{movies.Rated}</h5>
          <h5>{movies.Runtime}</h5>
        </div>
        <div className="fbc-4">
          <h5 className="genre">{movies.Genre}</h5>
        </div>
        <div className="fbc-5">
          <h3 className="plot">Plot</h3>
          <p>{movies.Plot}</p>
          <h3>Actors</h3>
          <p>{movies.Actors}</p>
        </div>
      </div>
      <div className="fbc-6">
        <h4>{movies.Rating}</h4>
      </div>
    </div>
  );
}

MovieDetails.defaultProps = {
  title: "",
  //  key:movie.imdbID,
  //  title:movie.Title,
  //  type:movie.Type,
  //  posterUrl:movie.Poster,
  //  rating:movie.Rated,
  //  runtime:movie.Runtime,
  //  genre:movie.Genre,
  //  plot:movie.Plot,
  //  actors:movie.Actors,
  //  rated:movie.Rated,
};
