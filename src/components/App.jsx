import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
// import notes from '../notes';
import AddNote from './AddNote';

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(newNote => {
            return [...newNote, note];
        });
    }
    return <div>
        <Header />
        <AddNote onAdd={addNote} />
        {notes.map(note =>
            <Notes 
                key={note.key}
                title={note.title}
                content={note.content}
            />
        )}
        <Footer />
    </div>
}
export default App;