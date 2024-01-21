import { React, useRef } from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({ handleSearchNote }) {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus()
  }

  return (
    <div className="search-bar">
        <MdSearch onClick={handleClick} className="search-icons search-bar--icon" size="2.5em" /> 
        <input ref={ref} onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Type to Search..." />
    </div>
  )
}
