import logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <header className="bg-white w-full shadow p-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
      Dashboard
    </h1>

    <div className="w-full sm:w-auto">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
    </div>

    <div className="flex items-center space-x-2">
      <img src={logo} alt="MarketPlace Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">MarketPlace</h2>
    </div>
  </header>
  );
};
