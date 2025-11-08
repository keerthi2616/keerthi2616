import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import ManageProducts from "./components/ManageProducts";
import Cart from "./components/Cart";
import UserManagement from "./components/UserManagement";
import ViewAnalytics from "./components/ViewAnalytics";
import Products from "./components/Products";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-products" element={<ManageProducts />} /> 
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/analytics" element={<ViewAnalytics />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} /> {/* ✅ User shopping page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;