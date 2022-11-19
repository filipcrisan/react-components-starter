import { useState } from "react";

function Search({ setQuery }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search-form">
      <input
        className="input"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button" onClick={() => setQuery(inputValue)}>
        Search
      </button>
    </div>
  );
}

export default Search;
