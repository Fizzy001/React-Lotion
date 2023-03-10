import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import React, { useState, useRef, useEffect} from "react";
import { useNavigate, useOutletContext } from "react-router-dom"; 
import { useContext } from 'react';

function Mainbar(){
    
    const [notes, getActive, setNotes, updateNote, activeNote] = useOutletContext();
    
    const direction = useNavigate();

    const [text_header, setTextHeader] = useState("");
    const [text_body, setTextBody] = useState("");

    useEffect(()=> {
        setTextHeader(activeNote ? activeNote["title"] : "")
      }, [activeNote])

      useEffect(() =>{
        setTextBody(activeNote ? activeNote["body"] : "")
      }, [activeNote])
    
    //Date
    const formatDate = () => {
        const formatted = new Date(Date.now()).toLocaleString("en-US", {hour:"2-digit", minute: "2-digit", second: "2-digit",});
        if (formatted === "Invalid Date") { 
          return "";
        }
        return formatted;
    };

    //Active Notes
    const editField = (key, value)=>{
        updateNote({
            activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    };

    useEffect(()=> {
        setTextHeader(activeNote ? activeNote["title"] : "")
      }, [activeNote])

    //Save Notes
    const onSave = () =>{
        direction(`/note/view/${activeNote}`, {replace:true});
    }

    var foundNote = notes.find((note) => note.id === activeNote);

    if(!activeNote) return <div className="Noteplacetwo">Select a note, or create a new one</div>

    return <div>
                <div className="editor-header">
                    <input
                    id="title"
                    type="text"
                    value={foundNote.title}
                    onChange={(event) => setTextHeader("title", event.target.value)}
                    />
                    <button onClick={onSave}>Save</button>
                    <button>Delete</button>
                </div>

                <input className="editor-time" type="datetime-local" onChange={formatDate} />
                    <ReactQuill id="body"
                            theme="snow"
                            placeholder="Your Note Here"
                            value={foundNote.body}
                            onChange={(event) => editField("body", event.target.value)}
                            />
            </div>
}

export default Mainbar;