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
      <p>
        {player.name} has {player.score} point(s).
        <button className="button button--round" onClick={this.handleIncrement}>
          +1
        </button>
        <button className="button button--round" onClick={this.handleDecrement}>
          -1
        </button>
        <button className="button button--round" onClick={this.handleDelete}>
          X
        </button>
      </p>
    </div>
  );
};

export default PlayerList;
