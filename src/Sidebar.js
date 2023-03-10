import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({notes, addNotes, deleteNote, activeNote, activateNote}){
    const direction = useNavigate();

    const divClick = (event) =>{
        activateNote(event)
        direction(`/note/edit/${activeNote}`, {replace: true})
    }

    return <div className="left">
        <div className="left-side-header">
            <nav>
                <h2>Notes</h2>
                <button id="plus" onClick={addNotes}>&#43;</button>
            </nav>
        </div>
        <div className="left-list">
            {notes.map((note) =>(
                <div className={note.id === activeNote ? "left-note active" : "left-note"} onClick={() => divClick(note.id)}>
                    <div className="left-note-title">
                        <strong>{note.title}</strong>
                        <button onClick={() => deleteNote(note.id)}>Delete</button>
                    </div>

                    <small>Last modified {new Date(note.lastModified).toLocaleDateString("en-US", {hour:"2-digit", minute: "2-digit", second: "2-digit",})}</small>
                    <p>{note.body && note.body.substr(0,100)+"..."}</p>
                </div>
            ))}
            
        </div>
    </div>
}

export default Sidebar;