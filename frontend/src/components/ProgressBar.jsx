import React from 'react';

const ProgressBar = ({ completed, total }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div>
      <h3>Task Progress</h3>
      <div style={{ border: '1px solid #ccc', width: '100%', height: '20px' }}>
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: 'green',
          }}
        ></div>
      </div>
      <p>{percentage}% Completed</p>
    </div>
  );
};

export default ProgressBar;
