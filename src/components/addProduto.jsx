

export const AddProduto = () => {
    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
       
        <div className="flex items-center mb-6">
          <div className="ml-auto">
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded mr-2">Discard Changes</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Products</button>
          </div>
        </div>

      <div className="bg-gray-100 p-6 rounded mb-6">
        <h2 className="text-lg font-bold mb-4">General Information</h2>
        <div className="mb-4">
          <input type="text" placeholder="Product Name" className="w-full p-2 border rounded"/>
        </div>
        <div className="mb-4">
          <textarea placeholder="Description" className="w-full p-2 border rounded"></textarea>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <div className="mb-4">
          <input type="text" placeholder="$ 11.898" className="w-full p-3 border rounded-lg"/>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input type="text" placeholder="25 %" className="w-full p-3 border rounded-lg"/>
          </div>
          <div>
            <input type="text" placeholder="Select Discount Type" className="w-full p-3 border rounded-lg"/>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded mb-6">
        <h2 className="text-lg font-bold mb-4">Inventory</h2>
        <div className="flex mb-4">
          <input type="text" placeholder="Barcode" className="w-1/2 p-2 border rounded mr-2"/>
          <input type="text" placeholder="Quantity" className="w-1/2 p-2 border rounded"/>
        </div>
      </div>
    </div>
    )
}
