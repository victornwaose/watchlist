import React from 'react';
import {MovieControl} from '../components/MovieControl';


export const Moviecards = ({movie, type}) => {
    return (
        <div className="movie-card">
        <div className="overlay"></div>
  
        <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControl type={type} movie={movie} />
    </div>
    )
};
