import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function AddNote(props) {
    const[note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setIsExpanded] = useState(false);

    function expand(){
        setIsExpanded(true);
    }

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
        {isExpanded && 
        <input 
            name="title" 
            value={note.title} 
            placeholder="Title"
            onChange={handleChange}
        />}
        <textarea 
            name="content" 
            value={note.content} 
            placeholder="Write something..." 
            rows={isExpanded ? "3" : "1"} 
            onChange={handleChange} 
            onClick={expand}
        />
        <Zoom in={isExpanded}>
            <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
