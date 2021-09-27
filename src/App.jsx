import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import notes from './notes';

console.log(notes);
function createNotes(note){
    return <Notes 
        key={note.key}
        title={note.title}
        content={note.content}
    />
}


function App(){
    return <div>
        <Header />
        {notes.map(createNotes)};
        <Footer />
    </div>
}
export default App;