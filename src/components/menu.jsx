import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Lateral Desktop */}
      <div className="hidden lg:block lg:w-64 border-r bg-[#EFF0F5] h-screen relative">
        <div className="p-4">
          <div className="flex items-center text-2xl font-bold text-gray-800 mb-4">
            <img src={logo} alt="Logo" className="w-12" />
            <h2 className="ml-2">MarketPlace</h2>
          </div>
          <ul className="space-y-2">
            <NavLink to="/admin/dashboard" className="block p-2 hover:bg-gray-200 rounded">
              Dashboard
            </NavLink>
            <NavLink to="/customer" className="block p-2 hover:bg-gray-200 rounded">
              Customer
            </NavLink>
            <NavLink to="/store" className="block p-2 hover:bg-gray-200 rounded">
              Store
            </NavLink>
            <NavLink to="/add-store" className="block p-2 hover:bg-gray-200 rounded">
              Add Store
            </NavLink>
          </ul>
          <div className="absolute bottom-0 w-full p-4">
            <ul className="space-y-2">
              <Link to="/" className="block p-2 hover:bg-gray-200 rounded">
                Settings
              </Link>
              <NavLink to="/help" className="block p-2 hover:bg-gray-200 rounded">
                Help
              </NavLink>
              <li>
                <button className="w-full p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="lg:hidden">
        <button
          className="p-4 text-gray-800"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-60 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="bg-white p-4 w-64 h-full">
            <div className="flex items-center justify-between mb-4">
              <img src={logo} alt="Logo" className="w-12" />
              <button
                className="text-gray-600 hover:text-gray-900 text-2xl"
                onClick={toggleMenu}
              >
                <FaTimes />
              </button>
            </div>
            <ul className="space-y-2">
              <NavLink to="/admin/dashboard" className="block p-2 hover:bg-gray-200 rounded">
                Dashboard
              </NavLink>
              <NavLink to="/customer" className="block p-2 hover:bg-gray-200 rounded">
                Customer
              </NavLink>
              <NavLink to="/store" className="block p-2 hover:bg-gray-200 rounded">
                Store
              </NavLink>
              <NavLink to="/add-store" className="block p-2 hover:bg-gray-200 rounded">
                Add Store
              </NavLink>
            </ul>
            <div className="absolute bottom-0 w-full p-4">
              <ul className="space-y-2">
                <Link to="/" className="block p-2 hover:bg-gray-200 rounded">
                  Settings
                </Link>
                <NavLink to="/help" className="block p-2 hover:bg-gray-200 rounded">
                  Help
                </NavLink>
                <li className="mx-auto">
                  <button className="p-2 bg-red-500  text-white rounded-full hover:bg-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
