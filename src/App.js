import { useState } from "react";
import "./App.css";
import PathGet from "./components/PathGet";
import SearchInput from "./components/SearchInput";

function App() {
  const [queryString, setQueryString] = useState("");
  const getQueryString = (text) => {
    setQueryString(text);
  };

  return (
    <div className='App'>
      <SearchInput getQuery={getQueryString} />
      <PathGet queryString={queryString} />
    </div>
  );
}

export default App;
