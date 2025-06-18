import Product from "./Product";
import HeroNav from "./HeroNav";
import "./hero.css";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const Hero = () => {
  let [view, setView] = useState(false);
  let [product, setProduct] = useState([]);
  let [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://appscrip-tqk9.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
      console.log(sortOrder)
  }, []);

  let toggleSidebar = () => {
    setView((e) => !e);
  };

  const sortedProducts = [...product];

  if (sortOrder === "PRICE:LOW TO HIGH") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "PRICE:HIGH TO LOW") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="mainSec item-center">
      <HeroNav setSortOrder={setSortOrder} items={product} view={view} onToggle={toggleSidebar} />
      <section className="sideNproductSec">
        <SideBar isVisible={view} />
        <Product style={view} items={sortedProducts} />
      </section>
    </main>
  );
};

export default Hero;
