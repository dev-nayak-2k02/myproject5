import React from "react";
import SearchShow from "./SearchShow";
const SearchList = ({ items }) => {
  return (
    <>
      {items.map((items) => (
        <SearchShow key={items.id} item={items} />
      ))}
    </>
  );
};

export default SearchList;
