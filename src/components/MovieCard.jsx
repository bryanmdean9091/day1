import React, {useState} from "react";
import PropTypes from "prop-types";
import "./movieCard.css";
import { getMovieById } from "../Utils";

// export default function MovieCard({
//   title,
//   posterUrl,
//   movieId,
//   handleGetMovieById,
//   setOpen,
// }) {
//   const handleClick = () => {
//     handleGetMovieById(movieId);
//     console.log(movieId);
//     setOpen(true);
//   };

export default function MovieCard(props) {
  const { title, type, posterUrl, imdbID, setModalMovie } = props;

  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    // setModal(true);
    // setIsLoading(true);
    getMovieById(imdbID);
  };
  return (
    <div className="container">
      <div className="movie-card">
        <img src={posterUrl} alt={title} />
        <div className="card-body">
          <h3 className="title">{title}</h3>
        </div>
        <div className="buttonBox">
          <button className="mvBtn" onClick={toggleModal}>
            Movie
          </button>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  posterUrl: PropTypes.string,
};
