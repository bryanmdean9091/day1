import React, { useState, useEffect} from 'react';
// import App from '../App';
import { getMoviesByName, getMoviesById } from '../Utils';


export default function Greeting() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await getMoviesByName();
      const { Search } = await res.json();
      setMovies(Search);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
    {movies?.map((movie) => (
      <h1 key={movie.imdbID}>{movie.Title}</h1>
    ))}</div>
  );
};


