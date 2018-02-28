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
    <div>
      <p>
        {player.name} has {player.score} point(s).
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleDelete}>X</button>
      </p>
    </div>
  );
};

export default PlayerList;
