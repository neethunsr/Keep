import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function AddNote(props) {
    const[note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const{name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
  return (
    <div>
      <form className="addNote">
        <input 
            name="title" 
            value={note.title} 
            placeholder="Title"
            onChange={handleChange} 
        />
        <textarea 
            name="content" 
            value={note.content} 
            placeholder="Write something..." 
            rows="3" 
            onChange={handleChange}
        />
        <Zoom in={true}>
            <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
