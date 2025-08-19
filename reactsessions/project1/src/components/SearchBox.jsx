import React from 'react'

const SearchBox = ({ handleChange }) => {
  return (
    <>
      <input 
        type="text" 
        placeholder="Search..."   // 👈 this line adds the placeholder
        onChange={handleChange} 
      />
    </>
  )
}

export default SearchBox
