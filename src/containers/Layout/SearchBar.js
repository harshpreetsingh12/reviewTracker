import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Add your search logic here
  };

  return (
    <div className="flex items-center  relative text-black text-sm h-min">
      <input
        type="text"
        className="rounded-md px-4 py-2 w-56 focus:outline-none  pl-8  "
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <FontAwesomeIcon className='absolute left-2 m-auto' icon='magnifying-glass'/>
    </div>
  );
};

export default SearchBar;
