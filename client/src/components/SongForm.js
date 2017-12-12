import React from 'react';

class SongForm extends React.Component {
    state = { name: '', artist: ''}

    handleChangeName = e => {
        this.setState({ name: e.target.value });
    }

    handleChangeArtist = e => {
        this.setState({ artist: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSong(this.state.name, this.state.artist)
        this.setState({ name: '', artist: '' })
        this.props.toggleForm()
    }

    render() {
        if (this.props.formVisibility) {
            return(
                <form className="row" onSubmit={this.handleSubmit}>
                <input 
                    className = "col s8 offset-s2"
                    placeholder={(this.props.artist === "") ? "Artist Name" : this.props.artist}
                    required
                    value={this.state.artist}
                    onChange={this.handleChangeArtist}
                />
                <input
                    className = "col s8 offset-s2"
                    placeholder={(this.props.name === "") ? "Song Name" : this.props.name}
                    required
                    value={this.state.name}
                    onChange={this.handleChangeName}
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
                onClick= {this.props.toggleForm}
                />
                </form> 
            )
        }
    return(
        <input 
            className="waves-light btn" 
            type="button" 
            value="Add Song" 
            onClick={this.props.toggleForm}
        />
    )}
}

export default SongForm;
