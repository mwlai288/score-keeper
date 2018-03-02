import React, { Component } from 'react';
import Players from '../api/players';

class Form extends Component {
  handleSubmit = e => {
    let playerName = this.refs.name.value.trim();
    e.preventDefault();
    if (playerName !== '') {
      Players.insert({
        name: playerName,
        score: 0
      });
      this.refs.name.value = '';
    }
  };
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            type="text"
            ref="name"
            placeholder="Player Name"
          />
          <button className="button" onClick={this.handleSubmit}>
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
