import React from 'react';

function Result(props) {
  return (
    <div>
        <p>Good Job!</p>
        <p>You've completed the "{props.title}"!</p>
        <p>Recommended for you: 1, 2, 3...</p>
    </div>
  );
}

export default Result;
