import { useSelector } from "react-redux";
import { groupBy } from "lodash";
import CartProduct from "../components/CartProduct";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const { items } = cart;

  // Group items by ID
  const groupedItems = Object.values(groupBy(items, "id"));

  const { totalPrice, totalQuantity } = groupedItems.reduce(
    (acc, group) => {
      const price = group[0].price;
      const quantity = group.length;
      acc.totalPrice += price * quantity;
      acc.totalQuantity += quantity;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

  const cartPrice = parseFloat(totalPrice.toFixed(2));
  const DISCOUNT = 10;
  const [isDiscount, setIsDiscount] = useState(false);

  const toggleDiscount = () => {
    setIsDiscount((prev) => !prev);
  };

  const checkoutProducts = () => {};

  if (items.length === 0) {
    return <h1 className="text-2xl text-center">No items in the Cart</h1>;
  }

  return (
    <div className="flex flex-col p-4 gap-8">
      <div className="bg-gray-200 py-2">
        <h1 className="text-4xl font-semibold text-center">Cart</h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full gap-8 items-center lg:items-start">
        <div className="flex flex-1 flex-col items-center gap-4 w-full">
          {groupedItems.map((itemGroup) => (
            <CartProduct key={itemGroup[0].id} itemGroup={itemGroup} />
          ))}
        </div>
        <div className="flex flex-col w-3/4 lg:w-80 bg-gray-200 px-4 py-8 rounded shadow-lg h-fit lg:sticky top-20 gap-2">
          <h2 className="text-3xl font-bold mb-4 text-center">Summary</h2>
          <div className="mb-2 text-xl flex justify-center">
            <span>Total:&nbsp;</span>
            <span className="font-semibold">
              ${isDiscount ? (cartPrice - DISCOUNT).toFixed(2) : cartPrice}
            </span>
          </div>
          <div className="mb-4 text-xl flex justify-center">
            <span>Quantity:&nbsp;</span>
            <span className="font-semibold">{totalQuantity}</span>
          </div>
          {isDiscount && (
            <div className="mb-4 text-lg text-red-600 flex justify-center">
              <span>Discount:&nbsp;</span>
              <span>${DISCOUNT}</span>
            </div>
          )}
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={toggleDiscount}
              className="w-fit lg:w-full bg-green-400 hover:bg-green-600 py-2 px-4 rounded transition-colors"
              aria-label={isDiscount ? "Remove discount" : "Apply discount"}
            >
              {isDiscount ? "Remove Discount" : "Apply Discount"}
            </button>
            <button
              onClick={checkoutProducts}
              className="w-[250px] lg:w-full bg-yellow-300 hover:bg-yellow-500 py-2 px-4 text-lg rounded transition-colors"
              aria-label="Proceed to checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
