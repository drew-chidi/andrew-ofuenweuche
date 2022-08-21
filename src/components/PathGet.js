import React from "react";

const PathGet = ({ data, queryString }) => {
  const mystyle = {
    notFound: {
      color: "red",
      fontSize: "14px",
    },
  };

  let isFound = false;
  let foundPath = "";
  let count = 0;

  const helper = (currentitem, _target, _parentpath) => {
    if (typeof currentitem !== "object") {
      if (currentitem === _target) {
        isFound = true;
        foundPath = _parentpath;
        return;
      } else {
        return;
      }
    }

    let _keys = Object.keys(currentitem);
    for (let i = 0; i < _keys.length; i++) {
      let currentPath = _parentpath + "." + _keys[i].toString();
      helper(currentitem[_keys[i]], _target, currentPath);
    }
  };

  //let _name_first_tree =

  helper(data, queryString, "a");

  // return foundPath
  console.log(foundPath);
  return (
    <div>
      {foundPath.length > 0 ? (
        <p>{foundPath}</p>
      ) : (
        <p style={mystyle.notFound}>no path found for this string</p>
      )}
    </div>
  );
};

export default PathGet;
