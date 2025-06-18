import { useState } from "react";
import "./heroNav.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

const HeroNav = ({setSortOrder, onToggle, view,items }) => {
  const [shortData, setShortData] = useState(false);
  function toggleSection() {
    setShortData(!shortData);
  }

  function handleSortOptionClick(e) {
    const sortValue = e.target.textContent;
    setSortOrder(sortValue)
    setShortData(false)
  }
  return (
    <section>
      <strong className="responsiveFilter">Filter</strong>
      <div className="item-center hideUnhideSec">
        <strong>{items.length} ITEMS</strong>
        {view ? (
          <p onClick={onToggle} className="item-center">
            <MdKeyboardArrowDown className="left-arrow" /> SHOW FILTER
          </p>
        ) : (
          <p onClick={onToggle} className="item-center">
            <MdKeyboardArrowLeft className="left-arrow" /> HIDE FILTER
          </p>
        )}
      </div>
      <div onClick={toggleSection} className="item-center heroNav2ndSec">
        <strong className="item-center">
          RECOMMENDED{" "}
          {shortData ? (
            <MdKeyboardArrowUp className="right-arrow" />
          ) : (
            <MdKeyboardArrowDown className="right-arrow" />
          )}
        </strong>
      </div>
      {shortData?<div  className="shortProduct">
        <strong>&#10003; &nbsp;&nbsp; RECOMMENDED</strong>
        <li onClick={handleSortOptionClick}>NEWEST FIRST</li>
        <li onClick={handleSortOptionClick}>POPULAR</li>
        <li onClick={handleSortOptionClick}>PRICE:HIGH TO LOW</li>
        <li onClick={handleSortOptionClick}>PRICE:LOW TO HIGH</li>
      </div>:null}
      
    </section>
  );
};

export default HeroNav;
