import PropTypes from 'prop-types';
import './ActorCard.scss';
import noImage from '../../../No-image.jpg';


export default function ActorCard({ actor }) {
  const { character, name, profile_path } = actor;
  return (
    <div className="actorCard">
      <img
        className="actorCard__picture"
        src={profile_path? `https:image.tmdb.org/t/p/w300${profile_path}`: noImage }
        alt={name}
      />
      <div className="actorCard__info">
        <span className="actorCard__name">{name}</span>
        <span className="acrotCard__char">Character: {character}</span>
      </div>
    </div>
  );
}

ActorCard.propTypes = {
  actor: PropTypes.object,
};