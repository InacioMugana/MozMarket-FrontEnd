import React from "react";

export const AddLoja = () => {
    return (
        
 
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-left">Adicionar Loja</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-left">Owner</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                <input
                  type="text"
                  placeholder="+258 84 111 555"
                  className="mt-4 block border border-gray-300 rounded-md shadow-sm p-2 px-4"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-left">Stores</label>
                <input
                  type="text"
                  placeholder="Name the store"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                <input
                  type="text"
                  placeholder="Adress"
                  className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
          <div className="mb-6">
            <textarea
              placeholder="Store Description"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 h-32"
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-20 rounded-md"
            >
              Cadastre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddLoja;