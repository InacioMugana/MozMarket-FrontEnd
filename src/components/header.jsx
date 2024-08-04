import logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <header className="bg-white w-full shadow p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
        Dashboard
      </h1>
      <div className="w-full lg:w-auto">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full lg:w-64 focus:outline-none focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <div className="flex text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
          <img src={logo} alt="" />
          <h2 >MarketPlace</h2>
        </div>
    </header>
  );
};
