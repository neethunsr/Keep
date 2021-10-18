import React, {useState} from "react";

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
      <form>
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
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default AddNote;
