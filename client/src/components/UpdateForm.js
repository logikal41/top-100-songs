import React from 'react';

class UpdateForm extends React.Component {
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
    }

    render() {
        return(
            <form className="row" onSubmit={this.handleSubmit}>
            <input 
                className = "col s8 offset-s2"
                placeholder="Artist Name"
                required
                value={this.state.artist}
                onChange={this.handleChangeArtist}
            />
            <input
                className = "col s8 offset-s2"
                placeholder="Song Name"
                required
                value={this.state.name}
                onChange={this.handleChangeName}
            />
            <input className="col s2 offset-s5 waves-light btn" type="submit" value="add song"/>
            </form>
        )
    }

}

export default SongForm;