import React, { PropTypes } from 'react';
import './progress-bar.scss';
const ProgressBar = ({ current, max }) => {
    const getWidth = () => {
        return Math.floor(current / max * 100);
    };

    return (
        <div className="reusable-react progress-bar">
            <div className="progress" style={{width: `${getWidth()}%` }}>
                <p>{getWidth()}%</p>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    current: PropTypes.number,
    max: PropTypes.number,
    percentage: PropTypes.number,
};

export default ProgressBar;