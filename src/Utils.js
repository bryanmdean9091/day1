
import { useLayoutEffect } from 'react';
import {} from './movies';

const apikey =  '10afb4be'

export  function getMoviesByName(requestTitle, setMovie) {
  const result =  fetch (`http://www.omdbapi.com/?apikey=${apikey}&s=${requestTitle}`);
  return result;
};

export  function getMovieListByName(searchTerm) {
  const result =  fetch (`http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`);
  return result;
};

export const getMovieById = async (imdbID) => {
  const result =  fetch(`http://www.omdbapi.com/?apikey=${apikey}i=${imdbID}`);
  return result;
}





