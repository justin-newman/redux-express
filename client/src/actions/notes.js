// Get All Notes
export const getAllNotes = () => {
    fetch('/api/notes')
        .then( res => res.json() )
        .then( notes => dispatch({ type: 'NOTES', notes }) )
}

//Add a Notes
export const addNote = (title, body) => {
    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'ACCEPT': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    }).then( res => res.json() )
      .then( note => dispatchEvent({ type: 'ADD_NOTE', note }))
}

//Update a Note
export const updateNote = (id, title, body) => {
    fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify({ title, body })
    }).then( res => res.json() )
      .then( note => dispatch({ type: "UPDATE_NOTE", note }));
}


//Delete a note
export const deleteNote = (id) => {
    fetch(`/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then( () => dispatch({ type: 'DELETE', id }));
}