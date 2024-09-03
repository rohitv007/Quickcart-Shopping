import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCatg, setActiveCatg] = useState("All");

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(import.meta.env.VITE_API_URL);
      // console.log(data);
      setProducts(data);
      setError("");
      const catg_array = data.map((item) => item.category);
      const all_catg = ["All", ...new Set(catg_array)];
      // console.log(all_catg);
      setCategories(all_catg);
    } catch (err) {
      console.error("Error fetching products", err.message);
      setError(
        "There was an issue loading the products. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const categoryProducts =
    activeCatg === "All"
      ? products
      : products.filter((product) => product.category === activeCatg);

  const filteredProducts = categoryProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <Loader />;

  if (error)
    return <div className="text-red-600 text-center mt-4">{error}</div>;

  if (products.length === 0) {
    return (
      <div className="text-gray-600 text-center mt-4">
        No products available.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex items-center mb-6 sm:w-3/4 w-full">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2 text-lg"
        />
        <Button>
          <Search className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-12 mb-8">
        {categories.map((catg) => (
          <span
            key={catg}
            className={`text-sm font-medium px-4 py-2 rounded-full cursor-pointer capitalize transition-colors ${
              activeCatg === catg
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-300"
            }`}
            onClick={() => setActiveCatg(catg)} // Update active category on click
          >
            {catg}
          </span>
        ))}
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 py-8 max-w-screen-xl mx-auto">
        {filteredProducts.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
