

import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [notesArray, setNotesArray] = useState([]);
  const [note, setNote] = useState({ title: " ", description: " ", tag: " " });




  const fetchAllnotes = async () => {
    const data = await fetch("https://my-notes-app-mern-project.vercel.app/api/notes/fetchnote", {

      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem('token')
      }
    })
    const res = await data.json();
    console.log(res);
    setNotesArray(res);
  }


  //  Function for adding a note ......

  const addNote = async (title, description, tag) => {

    console.log("adding a new note")
    const data = await fetch("https://my-notes-app-mern-project.vercel.app/api/notes/addnote", {

      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })

    })

    const res = data.json();
    console.log("new node added", res)
    setNotesArray(notesArray.concat(note));
  }


  //  Function for updating a note ....

  const updateNote = async(title,description, tag, id) => {

    const data = await fetch(`https://my-notes-app-mern-project.vercel.app/api/notes/updatenote/${id}`, {

      method: "PUT",
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    })
    const res = await data.json();
    console.log(res);


  }


  // / Function for deleting a note .....

  const deleteNote = async (id) => {

    const data = await fetch(`https://my-notes-app-mern-project.vercel.app/api/notes/deletenote/${id}`, {

      method: "DELETE",
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem('token')
      }
    })
    const res = await data.json();
    console.log(res);

    console.log("deleting a note....");
    const newNotes = notesArray.filter((note) => { return note._id !== id })
    setNotesArray(newNotes)
  }


  useEffect(() => {
    fetchAllnotes();

  }, []);


  return <AppContext.Provider value={{ notesArray, addNote, deleteNote, note, setNote, updateNote }}>
    {children}
  </AppContext.Provider>

}


export { AppContext, AppProvider };
