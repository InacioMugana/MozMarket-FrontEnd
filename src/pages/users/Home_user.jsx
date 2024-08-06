import { Navbar } from "./components/navbar";

export const Home_user = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow mt-6 p-4">
      <h1 className="font-bold text-2xl mb-2">What are you looking for today?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border rounded-lg shadow-md p-4">
            <div className="flex gap-3">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold mb-2">TMA-2 Modular Headphone</h3>
                
              </div>
              <img
                src="img"
                alt=""
                className="w-full h-40 object-cover mb-4 "
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-green-600 text-white mt-2 px-4 py-2 rounded">
                Show now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border rounded-lg shadow-md p-4">
            <img
              src="img"
              alt=""
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold mb-2">Iphone X</h3>
            <p className="text-gray-700">252gb 6gb ram </p>
            <p className="text-gray-700 font-bold">25000 mt</p>
            <div className="flex gap-3 justify-between">
              <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded">
                Details
              </button>
              <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-4">
            <img
              src="img"
              alt=""
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold mb-2">Samsung s22 </h3>
            <p className="text-gray-700">252gb 6gb ram </p>
            <p className="text-gray-700 font-bold">25000 mt</p>
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded">
                Details
              </button>
              <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-4">
            <img
              src="img"
              alt=""
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold mb-2">Ipad 4</h3>
            <p className="text-gray-700">252gb 6gb ram </p>
            <p className="text-gray-700 font-bold">25000 mt</p>
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded">
                Details
              </button>
              <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
