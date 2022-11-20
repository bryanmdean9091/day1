import React, { useState, useEffect} from 'react';
import { getMoviesByName } from '../Utils';
import MovieCard from './MovieCard'
import { MovieDetails } from './MovieDetails';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [setOpen, handleGetMovieById] = useState('')

async function getMovies() {
    try {
        const res = await getMoviesByName(movieName);
        const { Search } = await res.json();
        console.log(Search);
        setMovies(Search);
    } catch (err) {
        console.log(err);
    }
}

const handleSubmit = () => {
    if (movieName !== '') getMovies();
};

useEffect(() => {
    getMovies();
}, );

console.log('our movies:', movies);

return (
    <div>
    <input
    type='search'
    name='movieName'
    onChange={(e) => setMovieName(e.target.value)}
    />
    <div>
    
        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Year}
            posterUrl={movie.Poster}
            rating={movie.Rating}
            runtime={movie.Runtime}
            genre={movie.Genre}
            plot={movie.Plot}
            actors={movie.Actors}
            rated={movie.Rated}
              movieId={movie.imdbID}
            handleGetMovieById={handleGetMovieById}
            setOpen={setOpen}
          />
        ))}
      </div>
      </div>
    
  )
};

