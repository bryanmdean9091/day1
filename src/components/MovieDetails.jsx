import React, {useState, useEffect} from "react";
import { getMoviesByName } from "../Utils";
import "./movie-details.css";
import {setMovieName} from './Movies'
import './Movies'
import Greeting from "./Greeting";


export  function MovieDetails ({
  posterUrl,
  title,
  rated,
  runtime,
  genre,
  plot,
  actors,
  rating,})
  {

const [movies,setMovies] = useState([])
  return (
    <div className="fb-container">
      <div className="poster-box">
        <img
          src={posterUrl}
          alt={title}
        />
         <button>Get Movie</button>
      </div>
      <div className=" fbc-2">
        <div className="title">
          <h1>{title}</h1>
         
        </div>
        <div className="fbc-3">
          <h5>{rated}</h5>
          <h5>{runtime}</h5>
        </div>
        <div className="fbc-4">
          <h5 className="genre">{genre}</h5>
        </div>
        <div className="fbc-5">
          <h3 className="plot">Plot</h3>
          <p>
          {plot}
          </p>
          <h3>Actors</h3>
          <p>{actors}</p>
        </div>
      </div>
      <div className="fbc-6">
        <h4>{rating}</h4>
      </div>
    </div>
  );
};

 MovieDetails.defaultProps = {
   title: '',
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