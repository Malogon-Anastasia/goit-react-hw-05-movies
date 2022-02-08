import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import "./MoviesList.scss";
import noImage from "../../No-image.jpg"

export default function MoviesList({ movies }) {
  let location = useLocation();
  return (
    <ul className="movie__list">
      {movies.map(movie => {
        return (
          <li key={movie.id} className="movie-list__item">
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {/* {movie.original_title || movie.original_name} */}
           
            <img
              className ="movie-poster"
                src={movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: noImage}
                   alt={movie.original_title}>
            </img>
              <h2 className="movie-title">{movie.title}</h2>
              </Link>
          </li>
          
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};