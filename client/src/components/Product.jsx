import "./product.css";
import heartIcon from "../assets/heart.svg";
import fillHeartIcon from "../assets/fillHeart.svg";
import { useState } from "react";

const Product = ({ style, items }) => {
  const [likedItems, setLikedItems] = useState({});

  const toggleHeart = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="products">
      {items.map((e, i) => (
        <div
          key={i}
          className={style ? "widhoutFilter item-center" : "card item-center"}
        >
          <img src={e.image} alt="" />
          <div>
            <h2>
              {e.title.length > 20
                ? e.title.toUpperCase().slice(0, 20) + "..."
                : e.title.toUpperCase()}
            </h2>
            <div className="item-center">
              <p>
                <span>Sign in</span> or Create an account to see pricing
              </p>
              <img
                onClick={() => toggleHeart(e.id)}
                src={likedItems[e.id] ? fillHeartIcon : heartIcon}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
