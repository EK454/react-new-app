import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../components/MovieRow.css';

const MovieRow = ({ movies }) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="movie-row-wrapper">
      <button className="scroll-button left" onClick={() => scroll('left')}>←</button>
      <div className="movie-row" ref={rowRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={movie.medium_cover_image} alt={movie.title} className="movie-poster" />
            <h3 className="movie-title">{movie.title}</h3>
            <Link to={`#/movie/${movie.id}`} className="view-details-button">View Details</Link>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll('right')}>→</button>
    </div>
  );
};

export default MovieRow;
