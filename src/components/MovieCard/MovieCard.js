import PropTypes from 'prop-types';
import './MovieCard.scss';

export default function MovieCard({ movie }) {
  const { title, poster_path, popularity, overview, genres } = movie;

  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={`poster of ${title}`}
        className="movieCard__poster"
      />
      <div className="movieCard__desc">
        <h2 className="movieCard__title">{title}</h2>
        <span className="movieCard__score">
          User score {Math.round(popularity)}
        </span>

        <h3 className="movieCard__title">Overview</h3>
        <p className="movieCard__overview">{overview}</p>

        <h3 className="movieCard__title">Genres</h3>
        <span className="movieCard__genres">
          {genres.map(gen => gen.name).join(', ')}
        </span>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};