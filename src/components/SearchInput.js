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
      width: "80%",
      maxWidth: "300px",
    },
    button: {
      margin: "8px 0px",
      borderRadius: "4px",
      color: "white",
      fontWeight: "600",
      outline: "none",
      backgroundColor: "#636b64",
    },
  };

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("im clicked");
    getQuery(query);
  };
  console.log("searchhandler", query);
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
