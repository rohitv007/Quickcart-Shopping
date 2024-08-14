import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(import.meta.env.VITE_API_URL);
      setProducts(data);
      setError("");
    } catch (err) {
      console.error("Error fetching products", err.message);
      setError(
        "There was an issue loading the products. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <Loader />;
  if (error)
    return <div className="text-red-600 text-center mt-4">{error}</div>;
  if (products.length === 0)
    return (
      <div className="text-gray-600 text-center mt-4">
        No products available.
      </div>
    );

  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 py-8 max-w-screen-xl mx-auto">
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
