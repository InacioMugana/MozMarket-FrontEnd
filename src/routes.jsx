import { Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import Login from "./pages/Login"
import { Store } from "./pages/Store"
import { Customers } from "./pages/customer"
import AddLoja from "./components/addLoja"
import { SignUp } from "./pages/signup"




export const Rotas=()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/admin/dashboard" element={<Home/>}/>
            <Route path="*" element={<NotFound/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/customer" element={<Customers/>} />
            <Route path="/add-store" element={<AddLoja/>} />
            <Route path="/signup" element={<SignUp/>} />
          
        </Routes>
    )
}