import Product from "./Product";
import HeroNav from "./HeroNav";
import "./hero.css";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const Hero = ({product}) => {
  let [view, setView] = useState(false);
  let [resView, setResView] = useState(false);
  let [sortOrder, setSortOrder] = useState("");

  

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
      <HeroNav setSortOrder={setSortOrder} tfdata={resView} visible={setResView} items={product} view={view} onToggle={toggleSidebar} />
      <section className="sideNproductSec">
        <SideBar isVisible={view} sideView={resView}/>
        <Product style={view} items={sortedProducts} />
      </section>
    </main>
  );
};

export default Hero;
