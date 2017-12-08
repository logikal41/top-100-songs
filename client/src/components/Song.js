import React from 'react';

const Song = ({id, name, artist, updateSong, deleteSong}) => (
    <div className="col s12">
        <div className="col m8">
           {name}
        </div>
        <div className="col m2">
            <input
                id={`song-${id}`}
            />
        </div>
        <div className="col m1" onClick={() => deleteSong(id)}>
            X
        </div>
    </div>
)

export default Song;