
import react, { useEffect, useState } from "react";
import { getMovieByName, getMovieListByName, getMovieByID } from "./Utils";
 import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Form from "./components/Form";
import "./App.css";
import './movies'

function App() {
  const [searchTerm, setSearchTerm] = useState('batman');
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
    
  useEffect(() => {
    getMovieListByName(searchTerm, setMovies);
  }, [searchTerm]);

  async function getMovies() {
    setIsLoading(true);
    try {
        const res = await getMovieListByName(searchTerm);
        const { Search } = await res.json();
        console.log(Search);
        setMovies(Search);
        setIsLoading(false);
    } catch (err) {
        console.log('my error',err.message);
        setIsLoading(false);
        setError(err.message)
    }
}

const handleSubmit = () => {
    if (searchTerm !== '') getMovies();
};

useEffect(() => {
    getMovies();
}, );

console.log('our movies:', movies);


  return (
    <>
      <div className="container">
        <Form setRequestTitle={setSearchTerm} />
      </div>
      <div className="movieInfo">
      {isLoading ? (
        <div className="loadingBox">
        <div className="loading"></div>
        </div>
      ) : error ? (
        <h1>Sorry, Something Went Wrong!</h1>
      ) : (
        <section className="moviesContainer">
          <MovieList movieList={movies} />
        </section>
      )}
        {/* <section className="moviesContainer">
          <MovieList movieList={movies} setSearchTerm={setSearchTerm} />
        </section> */}
      </div>
    </>
  );
}

export default App;
