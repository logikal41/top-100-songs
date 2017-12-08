import React from 'react';

const Song = ({id, name, artist, updateSong, deleteSong}) => (
    <div className="col s12">
        <div className="col m8">
           <h3>Song: {name} </h3>
        </div>
        <button type="button" className="col m1 btn" onClick={() => updateSong(id)}>
            update
        </button>
        <button type="button" className="col m1 btn" onClick={() => deleteSong(id)}>
            delete 
        </button>
    </div>
)

export default Song;