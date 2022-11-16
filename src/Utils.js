
import { useLayoutEffect } from 'react';
import {} from './movies';

const apikey =  '10afb4be'

export async function getMoviesByName(requestTitle, setMovie) {
  const result = await fetch (`http://www.omdbapi.com/?apikey=${apikey}&s=${requestTitle}`);
  const movie = await result.json();
  console.log(movie);
  setMovie(movie.Title)
};

export async function getMovieListByName(requestTitle, setMovies) {
  const result = await fetch (`http://www.omdbapi.com/?apikey=${apikey}&s=${requestTitle}`);
  const movies = await result.json();
  setMovies(movies.Search);
};

export const getMoviesById = async (Id) => {
  const result = await fetch(`http://www.omdbapi.com/?apikey=${apikey}i=${Id}`);
  const movie = await result.json();
}

// export function getMoviesByName(name) {
//   return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${name}`);
// }

// export function getMoviesById() {
//   return fetch(`http://www.omdbapi.com/?apikey=${apikey}i=tt0100669`);
// }


// const URL = `https://www.omdbapi.com/?t=$batman-v-superman&apikey=10afb4be`;

// export const getMoviesByName = async () => {
//   const result = await fetch(URL);
//   const json = await result.json();
//   console.log(json)
//    const title = json.Title;
//    console.log(title);
 
// //    console.log(pic);
// };

// getMoviesByName('Batman-v-Superman');

// export async function getMoviesByName(movieTitle) { 
  
// const response = await fetch(`http://www.omdbapi.com/?t=batman-v-superman&apikey=10afb4be`);

// return response.json();
// }
// getMoviesByName('Batman-v-Superman');

// getMovieDetailsById('tt0100669')



