import React from 'react';

import './Search.scss';

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search"
        className="search__input"
        />
    </div>
  )
}

export default Search;