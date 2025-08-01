import React from "react";

const SearchBar = ({ searchId, setSearchId }) => {
  return (
    <input
      type="text"
      placeholder="Search by Employee ID"
      value={searchId}
      onChange={(e) => setSearchId(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;
