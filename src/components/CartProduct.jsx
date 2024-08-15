import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../app/slice/cart/cartSlice";
import PlusIcon from "../assets/PlusIcon";
import MinusIcon from "../assets/MinusIcon";
import toast, { Toaster } from "react-hot-toast";

const CartProduct = ({ itemGroup }) => {
  const dispatch = useDispatch();
  const item = itemGroup[0]; // Destructure the first item directly

  const handleRemoveAll = () => {
    dispatch(clearItems(item.id));
    toast.success("All items removed");
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col border-2 border-gray-400 rounded my-4 p-4 w-[80%] sm:w-[60%] md:w-[50%] lg:w-3/5 items-center justify-center gap-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex self-end">
        <span className="text-xs">{item.category}</span>
      </div>
      <img
        className="w-[100px] h-[125px] aspect-auto"
        src={item.image}
        loading="lazy"
        alt={`${item.title} image`}
      />
      <div className="flex flex-col">
        <span className="font-medium">{item.title}</span>
        <span className="font-bold text-xl">${item.price.toFixed(2)}</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-4 items-center justify-evenly w-full">
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-1 font-bold rounded-tl-lg rounded-bl-lg"
            onClick={handleRemoveItem}
          >
            <MinusIcon />
          </button>
          <span className="text-lg px-4 py-1 bg-gray-200 font-bold">
            {itemGroup.length}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-1 font-bold rounded-tr-lg rounded-br-lg"
            onClick={handleAddItem}
          >
            <PlusIcon />
          </button>
        </div>
        <button
          className="bg-yellow-300 py-2 px-4 text-lg rounded-full hover:bg-yellow-500 font-medium"
          onClick={handleRemoveAll}
        >
          Remove from Cart
        </button>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

CartProduct.propTypes = {
  itemGroup: PropTypes.array.isRequired,
};

export default CartProduct;
