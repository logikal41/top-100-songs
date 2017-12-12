import React, { Component } from 'react';
import './App.css';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [], formVisibility: false, listVisibility: true, name: '', artist: '' }

  componentDidMount() {
    fetch('/api/songs')
      .then( res => res.json() )
      .then( songs => this.setState({ songs }) )
  }

  addSong = (name, artist) => { 
    let newSong = { name, artist };
    fetch('/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newSong)
    }).then( res => res.json() )
      .then( song => { 
        const {songs} = this.state;
        this.setState({ songs: [...songs, song] });
      })
  }

  toggleList = () => {
    this.setState({listVisibility: !this.state.listVisibility})
  }

  toggleForm = () => {
    this.setState({formVisibility: !this.state.formVisibility})
  }

  initUpdate = (id, name, artist) => {
    this.setState({name, artist})
    // this.toggleList()
    this.toggleForm()
  }
  
  updateSong = (id, name, artist) => {
    fetch(`/api/songs/${id}`, { method: 'PUT'})
      .then( res => res.json() )
      .then( song => {
        let songs = this.state.songs.map( t => {
          if( t.id === id)
            return song
          return t;
        });
        this.setState({ songs });
      })
  }

  deleteSong = (id) => {
    fetch(`/api/songs/${id}`, { method: 'DELETE' })
      .then( () => {
        const{ songs } = this.state;
        this.setState({ songs: songs.filter( t=> t.id !== id) })
      })
  }

  render() {
    return (
      <div className="container">
        <h2> Top 100 Songs </h2>
        <div className="container hero border">
          <SongForm addSong={this.addSong} 
          formVisibility={this.state.formVisibility} 
          toggleForm={this.toggleForm}
          toggleList={this.toggleList}
          artist={this.state.artist}
          name={this.state.name} />
        </div>
        <div className="row">
          <div className="col m1">
            Song ID
          </div>
          <div className="col m4">
            Song Name
          </div>
          <div className="col m4">
            Artist
          </div>
        </div>
          <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
          listVisibility={this.state.listVisibility}
          toggleList={this.toggleList}
          />
        </div>
      );
    }
}

export default App;
