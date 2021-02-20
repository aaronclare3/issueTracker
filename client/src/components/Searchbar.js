import React, { useState } from "react";

const Searchbar = ({ projects, passUpdatedList }) => {
  const [userSearchFilter, setUserSearchFilter] = useState("");

  const filterHandler = (inputVal) => {
    setUserSearchFilter(inputVal);
    const updatedList =
      projects &&
      projects.filter((proj) => {
        // Can also use .startsWith here if you want
        return proj.title.toLowerCase().includes(inputVal.toLowerCase());
      });
    if (updatedList.length !== 0) {
      passUpdatedList(updatedList);
    }
  };

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => filterHandler(e.target.value)}
        value={userSearchFilter}
      />
    </div>
  );
};

export default Searchbar;
