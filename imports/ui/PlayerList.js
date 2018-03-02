import React from 'react';
import Players from '../api/players';

const PlayerList = ({ player }) => {
  handleDelete = () => {
    Players.remove({
      _id: player._id
    });
  };
  handleIncrement = () => {
    Players.update({ _id: player._id }, { $inc: { score: 1 } });
  };
  handleDecrement = () => {
    Players.update({ _id: player._id }, { $inc: { score: -1 } });
  };
  return (
    <div className="item">
      <div className="player">
        <div>
          <h3 className="player__name">{player.name}</h3>
          <p className="player__stats"> {player.score} point(s).</p>
        </div>
        <div>
          <div className="player__actions">
            <button
              className="button button--round"
              onClick={this.handleIncrement}
            >
              +1
            </button>
            <button
              className="button button--round"
              onClick={this.handleDecrement}
            >
              -1
            </button>
            <button
              className="button button--round"
              onClick={this.handleDelete}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
