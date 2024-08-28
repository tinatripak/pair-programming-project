import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CoffeeShops from "./pages/CoffeeShops/CoffeeShops";
import CoffeeShop from "./pages/CoffeeShop/CoffeeShop";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/coffee-shops" element={<CoffeeShops />} />
          <Route path="/coffee-shops/:id" element={<CoffeeShop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
