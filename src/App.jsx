import Home from "./pages/Home";
import "./App.css";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} /> */}
        {user && (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/success" element={<Success />} />
          </>
        )}
         <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
