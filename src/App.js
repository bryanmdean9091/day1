
import React, { useEffect, useState } from "react";
import { getMovieByName, getMovieListByName, getMovieById } from "./Utils";
// import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Form from "./components/Form";
import "./App.css";
import './movies'
import Modal from './components/Modal'



function App() {
  const [searchTerm, setSearchTerm] = useState('batman');
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  
  
    
  useEffect(() => {
    getMovies(searchTerm);

  }, [searchTerm]);

  async function getMovies(searchTerm) {
    setIsLoading(true);
    try {
        const res = await getMovieListByName(searchTerm);
        const  Search  = await res.json();
        
        console.log(Search.Search);
        
        setMovies(Search.Search);
        setIsLoading(false);
    } catch (err) {
        console.log('my error',err.message);
        setIsLoading(false);
        setError(err.message)
    }
}

const getMovieById = async (movieId) => {
  const res = await getMovieById(movieId);
  const movie = await res.json();
  setMovie(movie);
};

const handleSubmit = () => {
  if (searchTerm !== '') getMovies() 
};



// useEffect(() => {
//     getMovies();
// },[searchTerm] ) ;

console.log('our movies:', movies);



  return (
    <>
      {open && (
        <Modal>
          <MovieDetails movie={movie} />
        </Modal>
      )}
      <div className="container">
        <Form setRequestTitle={setSearchTerm}  />
      </div>
      <div className="movieInfo">
      {isLoading ? (
        <div className="loadingBox">
        <div className="loading"></div>
        </div>
      ) : error ? (
        <h1>Sorry, Something Went Wrong!{error}</h1>
      ) : (
        <section className="moviesContainer">
          <MovieList movieList={movies}
             movies={movies}
          setSearchTerm={setSearchTerm}
          setOpen={setOpen}
          />
        </section>
      )}
      </div>
    </>
  );
}

export default App;
