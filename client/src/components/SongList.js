import React from 'react';
import Song from './Song';

class SongList extends React.Component {
    render() {
        if (this.props.listVisibility) {
            return(
                <div className="row">
                    { 
                        this.props.songs.map( song => 
                        <Song
                            key={song.id}
                            {...song}
                            updateSong={this.props.updateSong}
                            deleteSong={this.props.deleteSong}
                            initUpdate={this.props.initUpdate}
                        />
                    )}
                </div>
            )
        }
        return(null)
    }
}    
        

export default SongList;