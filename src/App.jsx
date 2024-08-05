import { BrowserRouter } from "react-router-dom";

import { Menu } from "./components/menu";
import { Rotas } from "./routes";
import { Header } from "./components/header";
import { Summary } from "./components/summary";
import { Table } from "./components/Table";
import { AddProduto } from "./components/addProduto";


function App() {
  return (
    <>
      <div className="flex h-screen">
        <Menu />
        <div className="flex flex-col flex-grow">
          <BrowserRouter>
          <Header />
            <div className="flex-grow p-6">
                  {/* <Summary/>
                  <Table/> 
                 <AddLoja/>*/}
                  <AddProduto/>
              <Rotas />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
