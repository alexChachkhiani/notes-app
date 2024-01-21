import React from 'react'

export default function Header({ handleTogggleDarkMode }) {

  return (
    <div className="header">
        <h1>Notes</h1>
        <button 
            onClick={() => 
                handleTogggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )
            }
            className="save-button"
        >Toggle Mode</button>
    </div>
  )
}
