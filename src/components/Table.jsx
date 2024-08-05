
export const Table = () => {

  const lojas = [
    { name: 'MozTech', products: 120, categories: 'Electronics, Furniture' },
    { name: 'Ladies', Store, products: 75, categories: 'Clothing, Accessories' },
    { name: 'Moz Academic', products: 200, categories: 'Books, Stationery' },
    { Name: 'Shoprit', products: 50, categories: 'Food, Beverages' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Stores</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-[#D8F0FD]">
            <th className="px-4 py-2">Store Name</th>
            <th className="px-4 py-2">Number of Products</th>
            <th className="px-4 py-2">Categories</th>
          </tr>
        </thead>
        <tbody>
          {lojas.map((loja, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="px-4 py-2">{loja.name}</td>
              <td className="px-4 py-2">{loja.products}</td>
              <td className="px-4 py-2">{loja.categories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
