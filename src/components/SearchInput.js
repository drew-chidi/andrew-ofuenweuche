import React, { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(true);

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

  const searchHandler = () => {};
  return (
    <form onSubmit={searchHandler} style={mystyle.container}>
      <div>
        <label htmlFor='search'></label>
        <input
          id='search'
          placeholder='Search...'
          style={mystyle.searchInput}
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
