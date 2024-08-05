import logo from "../assets/Logo.svg";

export const Menu = () => {
  return (
    <div className="hidden lg:block lg:w-64 border-r bg-[#EFF0F5] h-screen relative ">
      <div className="p-4">
        <div className="flex text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
          <img src={logo} alt="Logo" />
          <h2>MarketPlace</h2>
        </div>
        <div className="flex justify-center items-center">
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-200 rounded">
                Painel
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-200 rounded">
                Clientes
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-200 rounded">
                Loja
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-200 rounded">
                Adicionar Produto
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center absolute bottom-0">
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-200 rounded">
                Configurações
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-200 rounded">
                Help
              </a>
            </li>
            <li className="mb-2">
              <button className=" p-2 bg-red-500 text-white rounded-full  hover:bg-red-600">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
