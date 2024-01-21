import React from 'react'
import DeleteIcon from '../assets/delete-icon.png'

export default function Note({ id, text, date, handleDeleteNote }) {
  console.log(text)
  return (
    <div className="note">
        <p>{text}</p>
        <div className="note-footer">
            <small>{date}</small>
            <img src={DeleteIcon} alt="Delete Icon" className="delete-icon" width="20px" onClick={() => handleDeleteNote(id)} />
        </div>
    </div>
  )
}
