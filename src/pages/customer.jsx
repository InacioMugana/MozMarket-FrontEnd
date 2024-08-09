/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Menu } from "../components/menu";

export const Customers = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/customers');
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDados(data);
        console.log(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div className="flex h-screen">
        <Menu />
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="flex-grow p-6">
            <div className="bg-white shadow rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-bold mb-4">Customers</h2>
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="bg-[#D8F0FD]">
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">LastName</th>
                    <th className="px-4 py-2"> Email</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((customer, index) => (
                    <tr key={index} className="border-t border-gray-300">
                      <td className="px-4 py-2">{customer.firstName}</td>
                      <td className="px-4 py-2">{customer.lastName}</td> 
                      <td className="px-4 py-2">
                        {customer.email}
                      </td>
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
