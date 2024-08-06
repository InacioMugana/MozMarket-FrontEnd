import { useState } from "react";
import logo from "../../../assets/Logo.svg";
import { List, ShoppingCartSimple } from "@phosphor-icons/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-100  w-full shadow p-4 flex flex-col space-y-4 sm:space-y-0 relative">
      <div className="w-full flex justify-between items-center sm:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
        <List size={32} />
        </button>
        <nav
          className={`${
            isMenuOpen ? "block top-12" : "hidden"
          } absolute top-full left-0 w-full bg-white sm:static sm:block sm:w-auto sm:flex sm:space-x-4 p-4 sm:p-0 shadow-md sm:shadow-none z-10`}
        >
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 sm:hover:bg-transparent"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 sm:hover:bg-transparent"
          >
            Order
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 sm:hover:bg-transparent"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 sm:hover:bg-transparent"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="MarketPlace Logo"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            MarketPlace
          </h2>
        </div>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ShoppingCartSimple size={32} />
        </div>
      </div>
    </header>
  );
};
