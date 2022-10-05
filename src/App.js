import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Success from "./components/Success";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route exact="true" path="/cart/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
