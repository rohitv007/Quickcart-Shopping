import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem } from "../app/slice/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import Rating from "./Rating";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem(product));
    toast.success("Product Added to Cart");
  };

  const { title, price, category, image, rating } = product;

  return (
    <>
      <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-4 gap-y-2 bg-white hover:shadow-xl transition-shadow max-w-xs w-full h-[500px]">
        <div className="self-end text-gray-500 text-xs italic mb-2">
          {category}
        </div>
        <div className="flex justify-center items-center mb-4 flex-grow">
          <img
            className="w-full h-48 object-contain hover:scale-105 transition-transform"
            src={image}
            loading="lazy"
            alt={`${title} - ${category}`}
          />
        </div>
        <div className="flex flex-col items-center text-center flex-grow w-full">
          <h3 className="font-semibold text-base text-gray-800 mb-2 h-12 overflow-hidden">
            {title}
          </h3>
          <span className="font-bold text-xl text-blue-600 mb-2">${price}</span>
          <div className="flex items-center text-yellow-500 mb-2 gap-1">
            <span className="font-semibold text-sm mt-1">{rating.rate}</span>
            <Rating rating={rating.rate} />
            <sup className="text-gray-500 text-xs">({rating.count})</sup>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors mt-auto w-full"
          onClick={addToCart}
          aria-label={`Add ${title} to cart`}
        >
          Add to Cart
        </button>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
