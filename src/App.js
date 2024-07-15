import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieRow from './components/MovieRow';
import Detail from './routes/Detail';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5');
      const data = await response.json();
      setMovies(data.data.movies);
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="header">⭐⭐ Highly Rated Films ⭐⭐</h1>
              <MovieRow movies={movies} />
            </>
          } />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
