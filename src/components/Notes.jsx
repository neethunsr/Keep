import React from 'react';

function Notes(props) {
    return( 
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button>Delete</button>
    </div>
    );
}

export default Notes;
