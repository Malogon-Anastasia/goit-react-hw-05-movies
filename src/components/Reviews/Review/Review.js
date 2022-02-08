import PropTypes from 'prop-types';
import './Review.scss';

export default function Review({ reviews }) {
  const { author, content } = reviews;
  return (
    <div className="review">
      <h3 className="review__author">Author: {author}</h3>
      <p className="review__text">{content}</p>
    </div>
  );
}

Review.propTypes = {
  reviews: PropTypes.object,
};