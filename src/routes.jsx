import { Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import Login from "./pages/Login"

export const Rotas=()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/*" element={<NotFound/>} />

          
        </Routes>
    )
}