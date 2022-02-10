import React from 'react';

// "Quiz"からquiz=quizzes[problemIndex]を受け取って表示

function AnswerQuiz(props) {
  return (
    <div>

        <p id='questionArea'> {props.quiz? props.quiz["question"]: "now loading..."} </p> 

    </div>
    );
}

export default AnswerQuiz;
