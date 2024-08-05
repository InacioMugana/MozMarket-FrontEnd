import { Header } from "../components/header"
import { Menu } from "../components/menu"
import { Summary } from "../components/summary"
import { Table } from "../components/Table"

export const Home=()=>{
    return(
        <>
        <div className="flex h-screen">
          <Menu />
          <div className="flex flex-col flex-grow">
            <Header />
            <div className="flex-grow p-6">
              <Summary/>
                <Table/>
            </div>
          </div>
        </div>

      </>
    )
}