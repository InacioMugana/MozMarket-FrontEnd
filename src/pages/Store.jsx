import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Table } from "../components/Table";

export const Store = () => {
    return (
      <>
        <div className="flex h-screen">
          <Menu />
          <div className="flex flex-col flex-grow">
            <Header />
            <div className="flex-grow p-6">
                <h1>Home Store</h1>
                <Table/>
            </div>
          </div>
        </div>

      </>
    );
  };
  