import { Routes, Route } from "react-router-dom";
//dashboard
import Dashboard from "./pages/Dashboard/Dashboard";
//website
import Login from "./pages/Website/Auth/Login";
import Signup from "./pages/Website/Auth/signup";
//users
import User from "./pages/Dashboard/Users/User";
import UpdateUser from "./pages/Dashboard/Users/updateUser";
import Createuser from "./pages/Dashboard/Users/CreateUser";
import NewProduct from "./pages/Dashboard/products/NewProduct";
import Products from "./pages/Dashboard/products/Products";
import Home from "./pages/Website/Home/Home";
import ProductDetailes from "./pages/Website/Home/ProductDetailes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:productId" element={<ProductDetailes />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="users" element={<User /> } />
          <Route path="users/:id" element={<UpdateUser /> } />
          <Route path="createUser" element={<Createuser />}/>
          <Route path="products" element={<Products/>}/>
          <Route path="CreateProduct" element={<NewProduct />}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
