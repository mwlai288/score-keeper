import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Players from '../api/players';

import Form from './Form';
import PlayerList from './PlayerList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="title-bar">
          <div className="wrapper">
            <h1>Score Keep</h1>
          </div>
        </div>
        <div>
          <div className="wrapper">
            <Form />
            <PlayerList players={this.props.players} />
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    //  sort object get passed on the options object available on .find({}). add second argument, options object,
    //  specify sort method and use key and give 1 or -1 for ascending or descending.
    players: Players.find({}, { sort: { score: -1 } }).fetch()
  };
})(App);
