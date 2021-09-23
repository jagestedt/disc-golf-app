import React from 'react';

import Button from 'react-bootstrap/Button';
import '../../App.scss';
import './Scorecards.scss';

const ScorecardsView = () => {
  return (
    <div className="discs-view">
      <h1>Scorecards</h1>
      <Button variant="green-blue">New scorecard</Button>{' '}
      <ul>
        <li>Most recent scorecard</li>
        <li>Second most recent scorecard</li>
        <li>Third most recent scorecard</li>
      </ul>
    </div>
  );
};

export default ScorecardsView;
