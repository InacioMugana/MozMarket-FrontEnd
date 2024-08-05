import { Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

export const Rotas=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />

          
        </Routes>
    )
}