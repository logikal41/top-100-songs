import React from 'react';

const UpdateForm = ({id, name, artist, handleSubmit, handleChangeArtist, handleChangeName, initUpdate, cancelUpdate, clearState}) => (
   
    <form className="row" onSubmit={initUpdate}>
     <h2> This is an UPDATE </h2>
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