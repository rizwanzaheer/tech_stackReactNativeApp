import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    console.log('component will mount in Album list.');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      console.log('response is: ', response.data);
      this.setState({ albums: response.data });
    }).catch(((err) => {
      console.log('catch ', err);
    }));
  }
  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
