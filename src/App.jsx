import Home from "./pages/Home";
import "./App.css";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {useSelector } from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={user? <Home />: <Login/>} /> */}
        <Route exact path="/" element={ <Home />} />
        <Route path="/login" element={!user? <Login /> : <Home/>} />
        <Route path="/register" element={!user? <Register/> : <Home/>} />
        <Route path="/cart" element={user?<Cart />: <Login/>} />
        <Route path="/products/:category" element={user?<ProductList />: <Login/>} />
        <Route path="/product/:id" element={user?<Product />: <Login/>} />
        <Route path="/success" element={user?<Success />: <Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
