import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import UserIcon from "../assets/UserIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="min-w-full container mx-auto flex justify-between items-center bg-gray-100 border-b border-gray-500 shadow-md p-4 px-6 sm:px-12 relative">
      <div className="flex items-center w-full md:w-auto">
        <div className="block md:hidden mr-4">
          <button
            className="text-gray-700 hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <Link to="/" className="text-gray-700 font-semibold text-lg md:text-xl">
          QuickCart
        </Link>
      </div>

      <ul
        className={`fixed inset-0 bg-gray-100 border-t border-gray-500 shadow-lg md:relative md:flex md:space-x-16 md:bg-transparent md:border-0 md:shadow-none transition-transform transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0`}
        onClick={() => setIsMenuOpen(false)} // Close menu on link click
      >
        <li className="md:hidden p-4">
          <button
            className="text-gray-700 hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Close Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="p-4 md:p-0">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 transition-colors font-semibold block md:inline"
          >
            HOME
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-500 transition-colors font-semibold block md:inline"
          >
            PRODUCTS
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-500 transition-colors font-semibold block md:inline"
          >
            CONTACT
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-8">
        <Link
          to="/"
          aria-label="User Profile"
          className="hover:text-blue-500 transition-colors"
        >
          <UserIcon />
        </Link>
        <Link
          to="/cart"
          aria-label="View Cart"
          className="hover:text-blue-500 transition-colors"
        >
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
