import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import NotesList from './Components/NotesList'
import Search from './Components/Search'
import Header from './Components/Header'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "01/19/2024"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "01/19/2024"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "01/19/2024"
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "01/20/2024"
    }
  ])

  const [searchText, setSearchText] = useState("")

  const [darkMode, setDarkMode] = useState(false)

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }
  
  console.log(darkMode)

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App
