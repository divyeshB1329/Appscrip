import TopNav from "./TopNav";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import heart from "../assets/heart.svg";
import search from "../assets/search-normal.svg";
import shoppingBag from "../assets/shopping-bag.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  return (
    <header>
      <TopNav />
      <div className="topPart">
        <RxHamburgerMenu
          onClick={() => setBurger(!burger)}
          className="hamburger"
        />
        <img width={40} height={40} src={logo} alt="LOGO" />
        <h1>LOGO</h1>
        <ul>
          <img src={search} alt="" />
          <img src={heart} alt="" />
          <img src={shoppingBag} alt="" />
          <img src={profile} alt="" />
          <select id="lag">
            <option value="english">Eng</option>
            <option value="hindi">Hin</option>
            <option value="gujarati">Guj</option>
          </select>
        </ul>
      </div>
      <ul className={`${burger ? "pageList" : ""}`}>
        <a href="/">SHOP</a>
        <a href="/">SKILLS</a>
        <a href="/">STORIES</a>
        <a href="/">ABOUT</a>
        <a href="/">CONTACT US</a>
      </ul>
    </header>
  );
};

export default Navbar;
