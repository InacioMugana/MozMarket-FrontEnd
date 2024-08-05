export const Summary = () => {
  return (
    <div  className="flex  flex-col bg-white shadow rounded-md">
      <h1 className="font-semibold text-xl pl-9">Resume</h1>
      <div className="flex justify-between items-center p-8 ">
        <div className="flex-1 bg-[#F3E8FF] shadow rounded-lg p-6 m-2">
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <p className="text-3xl font-semibold">150</p>
          <p className="text-sm text-gray-500">Total products available</p>
        </div>
        <div className="flex-1 bg-[#FFE2E5] shadow rounded-lg p-6 m-2">
          <h2 className="text-xl font-bold mb-2">Total Sales</h2>
          <p className="text-3xl font-semibold">$ 50,000</p>
          <p className="text-sm text-gray-500">Revenue generated</p>
        </div>
        <div className="flex-1 bg-[#FFF4DE] shadow rounded-lg p-6 m-2">
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <p className="text-3xl font-semibold">8</p>
          <p className="text-sm text-gray-500">Product Categories</p>
        </div>
        <div className="flex-1 bg-[#DCFCE7] shadow rounded-lg p-6 m-2">
          <h2 className="text-xl font-bold mb-2">Costumer</h2>
          <p className="text-3xl font-semibold">1,200</p>
          <p className="text-sm text-gray-500">Active customers</p>
        </div>
      </div>
    </div>
  );
};
