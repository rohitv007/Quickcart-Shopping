import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
        Welcome to QuickCart
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-md">
        Your one-stop shop for all your needs. Browse our wide selection of
        products or check out your cart to complete your purchase.
      </p>
      <div className="flex space-x-6">
        <Link
          to="/products"
          className="bg-blue-500 text-white rounded-full py-2 px-6 text-lg font-semibold hover:bg-blue-600 transition-colors text-center"
        >
          Browse Products
        </Link>
        <Link
          to="/cart"
          className="bg-green-500 text-white rounded-full py-2 px-6 text-lg font-semibold hover:bg-green-600 transition-colors text-center"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default Home;
