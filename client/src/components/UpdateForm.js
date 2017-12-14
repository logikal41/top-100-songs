import React from 'react';

const UpdateForm = ({id, name, artist, handleUpdate, handleChangeArtist, handleChangeName, cancelUpdate, clearState}) => (
   
    <form className="row" onSubmit={handleUpdate}>
        <input 
            className = "col s8 offset-s2"
            required
            placeholder={artist}
            onChange={handleChangeArtist}
        />
        <input
            className = "col s8 offset-s2"
            required
            placeholder={name}
            onChange={handleChangeName}
        />
        <input 
        className="col s2 offset-s5 waves-light btn" 
        type="submit" 
        value="update song"
        />
        <input 
        className="col s2 offset-s5 waves-light btn" 
        type="button" 
        value="Go Back" 
        onClick= {() => { 
            cancelUpdate();
            clearState();
        }}
        />
    </form> 

)

export default UpdateForm;