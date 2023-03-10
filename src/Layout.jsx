import React, { useState, useEffect, useRef} from "react";
import { Outlet } from "react-router-dom";
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";


function Layout(){
    //Toggle sidebar
    const [show, toggleShow] = React.useState(true);
    const rightPart = show ? "right" : "rightFull";

    //Sidebar Note writing
    const[notes, setNotes] = useState([] || JSON.parse(localStorage.notes));

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    //Sidebar Adding Notes
    const addNotes = () =>{
        const addedNotes = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([addedNotes, ...notes]);
    };

    //Sidebar deleting Notes
    const deleteNote = (idNoteDelete) => {
        setNotes(notes.filter((note) => note.id !== idNoteDelete))
    }

    //Active Notes
    const[activeNote, activateNote] = useState(false);

    const getActive =() => {
        return notes.find((note) => note.id === activeNote);
    }

    //Update Notes
    const updateNote =(updatedNote) =>{
        const updatedNoteArray = notes.map((note) => {
            if(note.id === activeNote){
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNoteArray);
    }

    return<>
    <nav>
        <button onClick={() => toggleShow(!show)}>&#9776;</button>
        <div id="navigate">
            <h1>Lotion</h1>
            <div id="subtext">Like Notion, but worse</div>
        </div>
    </nav>
    {show &&<div><Sidebar notes={notes} addNotes={addNotes} deleteNote={deleteNote} activeNote={activeNote} activateNote={activateNote} /></div>}
    <div className={rightPart}><Outlet context = {[notes, getActive, setNotes, updateNote, activeNote]}/></div>
    </>
}

export default Layout;