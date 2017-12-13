import React from 'react';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';

class SongForm extends React.Component {
    state = { name: '', artist: ''}

    handleChangeName = e => {
        this.setState({ name: e.target.value });
    }

    handleChangeArtist = e => {
        this.setState({ artist: e.target.value });
    }

    goBack = () => {
        this.props.toggleForm()
        this.setState({ name: '', artist: '' })
    }

    clearState = () => {
        this.setState({ name: '', artist: '' })
    } 

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSong(this.state.name, this.state.artist)
        this.setState({ name: '', artist: '' })
        this.props.toggleForm()
    }

    render() {
        if (this.props.formVisibility && this.props.listVisibility) {
            return(
                <AddForm 
                handleSubmit={this.handleSubmit}
                handleChangeName={this.handleChangeName}
                handleChangeArtist={this.handleChangeArtist}
                goBack={this.goBack}
                />
            )
        } else if (this.props.formVisibility && !this.props.listVisibility) {
            return(
                <UpdateForm 
                name={this.props.name}
                artist={this.props.artist}
                handleSubmit={this.handleSubmit}
                handleChangeName={this.handleChangeName}
                handleChangeArtist={this.handleChangeArtist}
                toggleForm={this.props.toggleForm}
                cancelUpdate={this.props.cancelUpdate}
                clearState={this.clearState}
                />
            )
        } else {
            return(
                <input 
                    className="waves-light btn" 
                    type="button" 
                    value="Add Song" 
                    onClick={this.props.toggleForm}
                />
            )}
}}

export default SongForm;
