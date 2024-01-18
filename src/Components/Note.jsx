import React from 'react'
import DeleteIcon from '../assets/delete-icon.png'

export default function Note() {
  return (
    <div className="note">
        <p>Hello! This is our first note!</p>
        <div className="note-footer">
            <small>18/01/2024</small>
            <img src={DeleteIcon} alt="Delete Icon" className="delete-icon" width="24px"/>
        </div>
    </div>
  )
}
