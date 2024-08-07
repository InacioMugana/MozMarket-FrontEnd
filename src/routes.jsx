import { Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import Login from "./pages/Login"
import { Store } from "./pages/Store"
import { Customers } from "./pages/customer"
import AddLoja from "./components/addLoja"
import { SignUp } from "./pages/signup"
import { Dashboard_User } from "./pages/users/Dashboard_User"
import { Profile_User } from "./pages/users/Profile_User"
import { Home_user } from "./pages/users/Home_user"

export const Rotas=()=>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/admin/dashboard" element={<Home/>}/>
            <Route path="*" element={<NotFound/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/customer" element={<Customers/>} />
            <Route path="/add-store" element={<AddLoja/>} />
            <Route path="/signup" element={<SignUp/>} />


            <Route path="/user/dashboard" element= {<Dashboard_User/>}/>
            <Route path="/"   element={<Home_user/>} />
            <Route path="/user/profile" element= {<Profile_User/>}/>
    
        </Routes>
    )
}