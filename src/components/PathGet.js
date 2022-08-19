import React from "react";
import { data } from "../data";

const PathGet = ({ queryString }) => {
  // program to check if an object is an array

  // check if arr is array
  const result = Array.isArray(data);

  if (result) {
    console.log(" is an array.");
  } else {
    const arrayOfObj = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));

    console.log(arrayOfObj);
    console.log(" is not an array.");
  }

  return (
    <div>
      <p></p>
    </div>
  );
};

export default PathGet;
