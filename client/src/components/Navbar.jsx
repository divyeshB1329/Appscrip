import TopNav from "./TopNav";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import heart from "../assets/heart.svg";
import search from "../assets/search-normal.svg";
import shoppingBag from "../assets/shopping-bag.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";
import { useState } from "react";
import Search from "./Search";

const Navbar = ({searchFirstState,searchSecState,product}) => {
  const [burger, setBurger] = useState(false);

  return (
    <>
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
          <img onClick={()=>searchSecState(!searchFirstState)} src={search} alt="search" />
          <img src={heart} alt="Your Fav.. icon" />
          <img src={shoppingBag} alt="shopping-Bag" />
          <img src={profile} alt="profile-picture" />
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
    {searchFirstState && 
    <Search product={product} searchOne={searchFirstState} searchTwo={searchSecState}/>
    }
    </>
  );
};

export default Navbar;
