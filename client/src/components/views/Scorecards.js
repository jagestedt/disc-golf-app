import React from 'react';

const ScorecardsView = () => {
    return (
        <div className="discs-view">
            <h1>Scorecards</h1>
            <button>Create new scorecard</button>
            <ul>
                <li>Most recent scorecard</li>
                <li>Second most recent scorecard</li>
                <li>Third most recent scorecard</li>
            </ul>
        </div>
    );
};

export default ScorecardsView;
