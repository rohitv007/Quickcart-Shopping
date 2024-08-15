import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../assets/CartIcon";

const CartNavbar = () => {
  const totalQuantity = useSelector((state) => state.cart.items.length);

  return (
    <Link
      to="/cart"
      aria-label="View Cart"
      className="relative hover:text-blue-500 transition-colors"
    >
      <CartIcon />
      {totalQuantity > 0 && (
        <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartNavbar;
