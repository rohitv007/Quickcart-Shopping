import { Star, StarHalf } from "lucide-react";
import PropTypes from "prop-types";

function Rating({ rating, maxRating = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <StarHalf
              key={index}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          );
        } else {
          return <Star key={index} className="w-4 h-4 text-gray-300" />;
        }
      })}
    </div>
  );
}

// const Rating = ({ rating, maxRating = 5 }) => {
//   const getStars = () => {
//     const stars = [];
//     for (let i = 1; i <= maxRating; i++) {
//       if (i <= Math.floor(rating)) {
//         // Fully filled star
//         stars.push(
//           <span key={i} className="text-yellow-500 w-1/2">
//             ★
//           </span>
//         );
//       } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
//         // Half-filled star
//         stars.push(
//           <span key={i} className="relative text-yellow-500">
//             <span className="absolute inset-0 overflow-hidden w-1/2">★</span>
//             <span className="text-gray-300">★</span>
//           </span>
//         );
//       } else {
//         // Empty star
//         stars.push(
//           <span key={i} className="text-gray-200">
//             ★
//           </span>
//         );
//       }
//     }
//     return stars;
//   };

//   return <div className="flex text-xl">{getStars()}</div>;
// };

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

export default Rating;
