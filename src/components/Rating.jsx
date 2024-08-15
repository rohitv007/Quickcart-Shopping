import PropTypes from "prop-types";

const Rating = ({ rating, maxRating = 5 }) => {
  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (i <= Math.floor(rating)) {
        // Fully filled star
        stars.push(
          <span key={i} className="text-yellow-500 w-1/2">
            ★
          </span>
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half-filled star
        stars.push(
          <span key={i} className="relative text-yellow-500">
            <span className="absolute inset-0 overflow-hidden w-1/2">★</span>
            <span className="text-gray-300">★</span>
          </span>
        );
      } else {
        // Empty star
        stars.push(
          <span key={i} className="text-gray-200">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return <div className="flex text-xl">{getStars()}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

export default Rating;
