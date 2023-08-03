import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <input
          type='search'
          className='form-control'
          placeholder='Search Anything Here'
          value={term}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
