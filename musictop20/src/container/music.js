import React from 'react';
import ListView from '../components/listView.js';

class Music extends React.Component{

  constructor(){
    super();

    this.state = {
      charts: []
    };

  }

  componentDidMount(){
    const url ='https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    fetch(url)
    .then(response => response.json())
    .then(music => this.setState({charts: music.feed.entry}))
    .catch(err => console(err))

  }


  render(){
    return(
      <div>
        <h1>Top 20 Music</h1>
      <ListView data={this.state.charts} />
      </div>
    );
  }





}

export default Music;
