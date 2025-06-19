import "./search.css";
import { useState } from "react";

const Search = ({ product , searchTwo, searchOne }) => {
  const [query, setQuery] = useState("");

  const filteredResults = product.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <>
      <div className="bgOpacity">
        <div onClick={()=>searchTwo(!searchOne)} className="cros">X</div>
        <form role="search">
          <input
            id="search"
            type="search"
            value={query}
            name="q"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <ul>
          {filteredResults.length > 0
            ? filteredResults.map((item,i) => (
                <div className="items" key={i} onClick={()=>searchTwo(!searchOne)}>
                  <img src={item.image} className="serchImg" alt="Product name" />
                  <li>
                    {item.title.length > 20
                ? item.title.toUpperCase().slice(0, 25) + "..."
                : item.title.toUpperCase()}</li>
                </div>
              ))
            : query && <p>No results found.</p>}
        </ul>
      </div>
    </>
  );
};

export default Search;
