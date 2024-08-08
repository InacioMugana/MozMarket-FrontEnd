/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";
import { FaTimes } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-4xl relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-bold mb-4">{product.name}</h2>
        <img
          src={product.imagem || '/default-image.jpg'}
          alt={product.name}
          className="w-full h-80 object-cover mb-4 rounded-lg"
          onError={(e) => (e.target.src = '/default-image.jpg')}
        />
        <p className="text-gray-700 mb-4 text-lg">{product.description}</p>
        <p className="text-gray-700 font-bold text-xl mb-4">{product.price} mt</p>
        <p className="text-gray-700 mb-4 text-lg">Shop Name: {product.shop.name}</p>
      </div>
    </div>
  );
};

export const Home_user = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow mt-6 p-4">
        <h1 className="font-bold text-3xl mb-4 text-center">
          What are you looking for today?
        </h1>

        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={product.imagem || '/default-image.jpg'}
                alt={product.name}
                className="w-full h-40  object-cover mb-4 rounded-lg"
                onError={(e) => (e.target.src = '/default-image.jpg')}
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 text-sm mb-2">{product.description}</p>
              <p className="text-gray-700 font-semibold text-lg mb-2">{product.price} mt</p>
              <div className="flex gap-3 justify-between mt-2">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleDetailsClick(product)}
                >
                 <FiAlertCircle />
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
      </main>
    </div>
  );
};

export default Home_user;
