import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import React, { useState, useRef, useEffect} from "react";

function Mainbar({activeNote, updateNote}){
    //Reactquill Stuff
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, 3, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    
      const formats = [
        'header',
        'bold', 
        'italic', 
        'underline', 
        'strike', 
        'blockquote',
        'list', 
        'bullet', 
        'indent',
        'link', 
        'image'
      ];
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    
    //Date
    const formatDate = () => {
        const formatted = new Date(Date.now()).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") { 
          return "";
        }
        return formatted;
    };

    //Active Notes
    const editField = (key, value)=>{
        updateNote({
            [key]: value,
            lastModified: Date.now(),
        })
    };

    if(!activeNote) return <div className="Noteplacetwo">Select a note, or create a new one</div>

    return <div>
                <div className="editor-header">
                    <input
                    id="title"
                    type="text"
                    value={activeNote.title}
                    onChange={(event) => editField("title", event.target.value)}
                    />
                    <button>Save</button>
                    <button>Delete</button>
                </div>

                <input className="editor-time" type="datetime-local" onChange={formatDate} />
                    <ReactQuill id="editor-body"
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            placeholder="Your Note Here"
                            value={activeNote.body}
                            onChange={(event) => editField("editor-body", event.target.value)}
                            />
            </div>
}

export default Mainbar;