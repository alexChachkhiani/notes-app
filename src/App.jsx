import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import NotesList from './Components/NotesList'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "19/01/2024"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "19/01/2024"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "19/01/2024"
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "20/01/2024"
    }
  ])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  )
}

export default App
