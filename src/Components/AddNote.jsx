import React from 'react'
import { useState } from 'react'

export default function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState("")
    const characterLimit = 200;

    function handleChange(event) {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }

    function handleSaveClick() {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText)
            setNoteText("");
		}
	}

    return (
        <div className="note new-note">
            <textarea
            cols="10" 
            rows="8" 
            placeholder="Type to Add a Note..."
            value={noteText}
            onChange={handleChange}
            ></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className="save-button" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}
