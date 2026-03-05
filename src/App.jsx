import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/card.jsx";
import products from "./products.js";

function App() {
  const productCards = products.map((product) => {
    return (
      <Cards
        img={product.img}
        name={product.name}
        phone={product.name}
        email={product.email}
      />
    );
  });

  return <div className="advert">{productCards}</div>;
}

export default App;
