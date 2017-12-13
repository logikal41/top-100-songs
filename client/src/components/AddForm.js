import React from 'react';

const AddForm = ({name, artist, handleSubmit, handleChangeName, handleChangeArtist, goBack}) => (

    <form className="row" onSubmit={handleSubmit}>
        <input 
            className = "col s8 offset-s2"
            placeholder="Artist Name"
            required
            //value={artist}
            onChange={handleChangeArtist}
        />
        <input
            className = "col s8 offset-s2"
            placeholder="Song Name"
            required
            //value={name}
            onChange={handleChangeName}
        />
        <input 
        className="col s2 offset-s5 waves-light btn" 
        type="submit" 
        value="add song"
        />
        <input 
        className="col s2 offset-s5 waves-light btn" 
        type="button" 
        value="Go Back" 
        onClick= {goBack}
        />
    </form> 
)

export default AddForm;