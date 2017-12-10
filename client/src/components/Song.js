import React from 'react';

const Song = ({id, name, artist, updateSong, deleteSong}) => (
    <div className="col s12">
        <div className="col m9">
           <h3>song:&ensp; {name}  &ensp; artist: &ensp; {artist} </h3>
        </div>
        <button type="button" className="col m1 waves-light btn" onClick={() => updateSong(id)}>
            update  
        </button>
        <button type="button" className="col m1 waves-light btn" onClick={() => deleteSong(id)}>
            delete 
        </button>
    </div>
)

export default Song;