// import React from 'react';
// import  {getMoviesByName} from '../Utils'
// import './movieCard.css';
// import {setMovieName} from './Movies'
// import Movies from './Movies';

import React from "react";
import PropTypes from "prop-types";
import './movieCard.css'



export default function MovieCard({title, type, posterUrl}) {
  return (
   
    <div className='container'> 
    <div className='movie-card'>
    <img src={posterUrl} alt={title}/> 
     <div className='card-body'>
    <h3 className="title">{title}</h3>
    </div>
    <div className="buttonBox">
    <button className="mvBtn">Movie</button> 
    </div>
    </div>
    
    </div>
   
  )
};


MovieCard.propTypes = {
  title: PropTypes.string,
  posterUrl: PropTypes.string,
};

// MovieCard.defaultProps = {
//   title: '',
// };

// import React from 'react';
// import './movieCard.css';

// export default function MovieCard({ title, type, posterUrl }) {
//   return (
//     <div className="movie-card">
//       <img src="#" alt="Batman" />
//       <div className="card-body">
//         <h3>Batman v Something</h3>
//       </div>
//       <button>Movie</button>
//     </div>
//   );
// }
