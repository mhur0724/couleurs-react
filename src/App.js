import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Graphics from "./GraphicsSection/Graphics";
import LookBook from "./LookBookSection/LookBook";
import Store from "./StorePage/components/Store";
import FAQ from "./components/FAQPage/FAQ";
import Footer from "./components/Footer";
import Product from "./ProductPage/Product";
import { bestSellers } from "./components/data";
import { storeItems } from "./StorePage/components/StoreData";
import StoreItemPage from "./StorePage/components/StoreItemPage";
import Cart from "./CartPage/Cart";
import CartProvider from "./CartPage/CartProvider";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <HashRouter basename="/">
      <CartProvider>
        <div className="App">
          <Announcement />
          <Navbar cartCount={cartCount} setCartCount={setCartCount} />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              {storeItems.map((product) => (
                <Route
                  key={product.id}
                  path={product.nav}
                  element={
                    <StoreItemPage
                      key={product.id}
                      img={product.img}
                      id={product.id}
                      product={product.product}
                      price={product.price}
                      sizing={product.sizing}
                      care={product.care}
                      setCartCount={setCartCount}
                      cartCount={cartCount}
                    />
                  }
                />
              ))}
              {bestSellers.map((product) => (
                <Route
                  key={product.id}
                  path={product.nav}
                  element={
                    <Product
                      key={product.id}
                      img={product.img}
                      product={product.product}
                      price={product.price}
                      sizing={product.sizing}
                      care={product.care}
                    />
                  }
                />
              ))}
              <Route path="/graphics" element={<Graphics />} />
              <Route path="/lookbook" element={<LookBook />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route
                path="/cart"
                element={
                  <Cart cartCount={cartCount} setCartCount={setCartCount} />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </HashRouter>
  );
}

export default App;
