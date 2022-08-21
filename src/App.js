import { useState } from "react";
import "./App.css";
import PathGet from "./components/PathGet";
import SearchInput from "./components/SearchInput";
import { data } from "./data";

const App = () => {
  const [queryString, setQueryString] = useState("");
  const getQueryString = (text) => {
    setQueryString(text);
    console.log("text", text);
  };
  console.log(queryString);
  return (
    <div className='App'>
      <SearchInput getQuery={getQueryString} />
      <PathGet queryString={queryString} data={data} />
    </div>
  );
};

export default App;
