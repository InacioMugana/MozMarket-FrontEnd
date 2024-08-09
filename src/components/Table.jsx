import { useEffect, useState } from "react";

export const Table = () => {
  const [dados, setDados] = useState([]);
  const [error] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/shops');
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Stores</h2>

      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-[#D8F0FD]">
            <th className="px-4 py-2">Store Name</th>
            <th className="px-4 py-2">Owner</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((loja) => (
            <tr key={loja._id} className="border-t border-gray-300">
              <td className="px-4 py-2">{loja.name}</td>
              <td className="px-4 py-2">
                {`${loja.owner.firstName} ${loja.owner.lastName}`}
              </td>
              <td className="px-4 py-2">{loja.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
