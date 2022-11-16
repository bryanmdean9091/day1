// import { getMoviesByName } from './Utils';
// import Movies from './components/Movies';
// import Greeting from './components/Greeting';
// import MovieCard from './components/Movie.Card';
// import { MovieDetails } from './components/MovieDetails';

import react, { useEffect, useState } from "react";
import { getMovieByName, getMovieListByName, getMovieByID } from "./Utils";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [requestTitle, setRequestTitle] = useState('batman');
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
 
  
    // const [isLoading, setIsLoading] = useState(false)
   
  useEffect(() => {
    getMovieListByName(requestTitle, setMovies);
  }, [requestTitle]);

  return (
    <>
      <div className="container">
        <Form setRequestTitle={setRequestTitle} />
      </div>
      <div className="movieInfo">
        <section className="moviesContainer">
          <MovieList movieList={movies} />
        </section>
      </div>
    </>
  );
}

export default App;
