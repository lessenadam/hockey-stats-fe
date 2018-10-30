import React, { Component } from 'react';
const classNames = require('classnames');

class GameProjection extends Component {
  render() {
    const { game } = this.props;
    const isHomeFavored = game.homeTotal > game.awayTotal;
    const isAwayFavored = !isHomeFavored;
    const homeRowClasses = classNames(
      'projection-row',
      {
        'winner': isHomeFavored,
      }
    );
    const awayRowClasses = classNames(
      'projection-row',
      {
        'winner': isAwayFavored,
      }
    );
    return (
      <div className="projection">
        <div className={homeRowClasses}>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Home
            </div>
            <div className="projection-value">
              {game.homeTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Home
            </div>
            <div className="projection-value number">
              {game.homeTotal}
            </div>
          </div>
        </div>
        <div className={awayRowClasses}>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Away
            </div>
            <div className="projection-value">
              {game.awayTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Away
            </div>
            <div className="projection-value number">
              {game.awayTotal}
            </div>
          </div>
        </div>
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              Total
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              {game.gameTotal}
            </div>
          </div>
        </div>
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              Value
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              <strong>{game.algorithmScore}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameProjection;