import React, { Component } from 'react';
import './App.css';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [] }

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

  updateSong = (id) => {
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
        <div className="container hero">
          <SongForm addSong={this.addSong}/>
        </div>
        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}/>
        </div>
      );
    }
}

export default App;
