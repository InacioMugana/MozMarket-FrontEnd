import { BrowserRouter } from "react-router-dom";

import { Rotas } from "./routes";
import { Header } from "./components/header";
import { Store } from "./pages/Store";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col flex-grow">
          <BrowserRouter>
            <Rotas />

            <div className="flex-grow p-6"></div>
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
