import React from 'react';
import {Search} from '@material-ui/icons';

import './SearchField.scss';

const SearchField = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search"
        className="search__input" />
      <Search className="search__icon">youtube_searched_for</Search>
    </div>
  )
}

export default SearchField;