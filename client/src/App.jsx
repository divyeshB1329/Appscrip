import "./App.css";
import Footer from "./components/Footer";
import HeadingsText from "./components/HeadingsText";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";

function App() {
  const [serchSec, setserchSec] = useState(false)
  let [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://appscrip-tqk9.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <header>
        <Navbar searchFirstState={serchSec} searchSecState={setserchSec} product={product}  />
        <HeadingsText />
      </header>
      <Hero product={product}/>
      <Footer/>
    </>
  );
}

export default App;
