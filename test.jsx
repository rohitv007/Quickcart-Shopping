import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../app/slice/cart/cartSlice";
import PlusIcon from "../assets/PlusIcon";
import MinusIcon from "../assets/MinusIcon";

const CartProduct = ({ itemGroup }) => {
  // console.log(item);
  const dispatch = useDispatch();

  const deleteAllItems = (id) => {
    dispatch(clearItems(id));
  };

  // console.log(itemGroup[0]);
  const { id, title, price, category, image } = itemGroup[0];

  return (
    <div
      key={id}
      className="flex flex-col border-2 border-gray-400 rounded my-4 p-4 w-1/2 items-center justify-center gap-8"
    >
      <div className="flex self-end">
        <span className="text-xs">{category}</span>
      </div>
      <div>
        <img
          className="w-[100px] h-[125px] aspect-auto"
          src={image}
          loading="lazy"
          alt="product image"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="font-bold text-xl">${price}</span>
      </div>
      <div className="flex justify-evenly w-full">
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-1 font-bold rounded-tl-lg rounded-bl-lg"
            onClick={() => dispatch(removeItem(itemGroup[0]))}
          >
            <MinusIcon />
          </button>
          <span className="text-lg px-4 py-1 bg-gray-200 font-bold">
            {itemGroup.length}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-1 font-bold rounded-tr-lg rounded-br-lg"
            onClick={() => dispatch(addItem(itemGroup[0]))}
          >
            <PlusIcon />
          </button>
        </div>
        <button
          className="bg-yellow-300 py-2 px-4 text-lg rounded-full hover:bg-yellow-500 font-medium"
          onClick={() => deleteAllItems(id)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

CartProduct.propTypes = {
  itemGroup: PropTypes.array.isRequired,
};
