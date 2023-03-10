import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Viewing(){

    const [notes, getActive, setNotes, updateNote, activeNote] = useOutletContext();
    const direction = useNavigate();

    const onEdit = () =>{
        direction(`/note/edit/${activeNote}`, {replace:true});
    }
    
    return<div className="Viewing">
        <div className="ViewHeader"></div>
        <button onClick={onEdit}>Edit</button>
        <button>Delete</button>
        <div className="ViewBody"></div>
    </div>

}

export default Viewing;