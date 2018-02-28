import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Players from '../api/players';

import Form from './Form';
import PlayerList from './PlayerList';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Score Keep</h1>
        <div>
          <Form />
          {this.props.players.map(player => {
            return <PlayerList player={player} key={player._id} />;
          })}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    players: Players.find({}).fetch()
  };
})(App);
