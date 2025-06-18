import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./sidebar.css";
import { useState } from "react";

const SideOptionCom = ({ title, dataArr = 0 }) => {
  let [filterOptions, setFilterOptions] = useState(false);

  function toggleFilterSection() {
    setFilterOptions(!filterOptions);
  }
  return (
    <div className="sideBar2ndPart">
      <div className="item-center customizeOption">
        <h4>{title}</h4>
        <div onClick={() => setFilterOptions(toggleFilterSection)}>
          {filterOptions ? (
            <MdKeyboardArrowUp className="downArrow" />
          ) : (
            <MdKeyboardArrowDown className="downArrow" />
          )}
        </div>
      </div>
      <span>All</span>
      <div
        style={{ display: filterOptions ? "block" : "none" }}
        className="sideBarFilter"
      >

        <p>Unselect all</p>
        {dataArr.length ? (
          dataArr.map((e, i) => {
            return (
              <div key={i} className="filterOption">
                <input
                  type="checkbox"
                  name={e.toLowerCase()}
                  id={e.toLowerCase()}
                />
                <label htmlFor={e.toLowerCase()}>{e}</label>
              </div>
            );
          })
        ) : (
          <div>No Filter option</div>
        )}
      </div>
    </div>
  );
};

const SideBar = ({ isVisible }) => {
  if (isVisible) return null;

  return (
    <aside>
      <div className="item-center sideBar">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <strong>CUSTOMIZABLE</strong>
        </label>
      </div>
      <SideOptionCom
        dataArr={["Men's", "Women's", "Electronics","jewelry"]}
        title="IDEAL FOR"
      />
      <SideOptionCom title="OCCASION" />
      <SideOptionCom title="WORK" />
      <SideOptionCom title="FABRIC" />
      <SideOptionCom title="SEGMENT" />
      <SideOptionCom title="SUITABLE FOR" />
      <SideOptionCom title="RAW MATERIALS" />
      <SideOptionCom title="PATTERN" />
    </aside>
  );
};

export default SideBar;
