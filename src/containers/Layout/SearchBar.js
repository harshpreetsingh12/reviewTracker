import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallFontSize } from '../../constants/GlobalStyleComp';

const OuterSearchBar = styled.div`
    background-color: #80808026;
    border: 1px solid #80808085;
    display:flex;
    align-items:center;
    color:#aaaaaa;
    font-size:${SmallFontSize}px;
    border-radius:10px;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <OuterSearchBar className="relative">
      <input
        type="text"
        className="rounded-md px-4 py-2 w-56 focus:outline-none  pl-8  bg-transparent"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <FontAwesomeIcon className='absolute left-2 m-auto' icon='magnifying-glass'/>
    </OuterSearchBar>
  );
};

export default SearchBar;
