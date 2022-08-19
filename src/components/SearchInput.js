import React, { useState } from "react";

const SearchInput = ({ getQuery }) => {
  const [query, setQuery] = useState("");

  const mystyle = {
    container: {
      marginTop: "56px",
    },
    searchInput: {
      padding: "4px 10px",
      borderRadius: "8px",
      outline: "none",
    },
    button: {
      margin: "8px 0px",
      borderRadius: "4px",
      color: "black",
      fontWeight: "600",
      outline: "none",
    },
  };

  const searchHandler = (e) => {
    e.preventdefault();
    getQuery(query);
  };
  return (
    <form onSubmit={searchHandler} style={mystyle.container}>
      <div>
        <label htmlFor='search'></label>
        <input
          id='search'
          placeholder='Search...'
          style={mystyle.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <button type='submit' style={mystyle.button}>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
