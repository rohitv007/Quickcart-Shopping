import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem } from "../app/slice/cart/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem(product));
  };

  const { title, price, category, image, rating } = product;

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-4 gap-y-2 bg-white hover:shadow-xl transition-shadow max-w-xs w-full">
      <div className="self-end text-gray-500 text-xs italic mb-2">
        {category}
      </div>
      <div className="flex justify-center items-center mb-4">
        <img
          className="w-full h-48 object-contain hover:scale-105 transition-transform"
          src={image}
          loading="lazy"
          alt={`${title} - ${category}`}
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="font-semibold text-base text-gray-800 line-clamp-2 mb-2">
          {title}
        </span>
        <span className="font-bold text-xl text-blue-600 mb-2">${price}</span>
        <div className="flex items-center text-yellow-500 mb-2">
          <span className="text-sm">{rating.rate}</span>
          <sup className="ml-1 text-xs text-gray-500">
            ({rating.count} reviews)
          </sup>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
        onClick={addToCart}
        aria-label={`Add ${title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
