import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({ handleSearchNote }) {
  return (
    <div className="search-bar">
        <MdSearch className="search-icons" size="2em" /> 
        <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Type to Search..." />
    </div>
  )
}
