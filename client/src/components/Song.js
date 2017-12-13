import React from 'react';

const Song = ({id, name, artist, initUpdate, deleteSong}) => (
    <div className="col s12">
        <div className="col m1">
           <h3>{id}</h3>
        </div>
        <div className="col m4">
            <h3>{name}</h3>
        </div>
        <div className="col m4">
            <h3>{artist}</h3>
        </div>
        <button type="button" className="col m1 waves-light btn" onClick={() => initUpdate(id,name,artist)}>
            update  
        </button>
        <button type="button" className="col m1 waves-light btn" onClick={() => deleteSong(id)}>
            delete 
        </button>
    </div>
)

export default Song;