import React from 'react'
import { useState } from 'react'

export default function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState("")
    
    function handleChange(event) {
        setNoteText(event.target.value)
    }

    function handleSaveClick() {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        } 
    } 

    return (
        <div className="note new-note">
            <textarea 
            cols="10" 
            rows="8" 
            placeholder="Type to Add a Note..."
            onChange={handleChange}
            ></textarea>
        <div className="note-footer">
            <small>200 Remaining</small>
            <button className="save-button" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}
