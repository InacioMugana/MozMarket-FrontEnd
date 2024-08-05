import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Table } from "../components/Table";

export const Customers = () => {
  const lojas = [
    { name: "MozTech", Products: 120, Categories: "Electronics, Furniture" },
    { name: "Ladies' Store", products: 75, categories: "Clothing, Accessories" },
    { Name: "Moz Academic", products: 200, categories: "Books, Stationery" },
    { Name: "Shoprit", products: 50, categories: "Food, Beverages" },
  ];
  return (
    <>
      <div className="flex h-screen">
        <Menu />
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="flex-grow p-6">
            <div className="bg-white shadow rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-bold mb-4">costumer</h2>
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="bg-[#D8F0FD]">
                    <th className="px-4 py-2">Costumer Name</th>
                    <th className="px-4 py-2">Number of Produts</th>
                    <th className="px-4 py-2">Categories</th>
                  </tr>
                </thead>
                <tbody>
                  {lojas.map((loja, index) => (
                    <tr key={index} className="border-t border-gray-300">
                      <td className="px-4 py-2">{loja.name}</td>
                      <td className="px-4 py-2">{loja.produts}</td>
                      <td className="px-4 py-2">{loja.categories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
