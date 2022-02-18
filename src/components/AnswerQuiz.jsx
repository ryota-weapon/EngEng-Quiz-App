import React from 'react';

// "Quiz"からquiz=quizzes[problemIndex]を受け取って表示
// =>変更

function AnswerQuiz(props) {
  return (
    <div>
        {/* <p>問題の数は、{props.problems.length}問です。</p> */}
        <p id="problemIndex">Q {props.problemIndex+1}</p>
        <p className='meaningArea'> ①{props.problems[props.problemIndex]? props.problems[props.problemIndex]["meaning1"]: "now loading..."} </p> 
        <p className='exampleArea'> {props.problems[props.problemIndex]? props.problems[props.problemIndex]["example1"]: "now loading..."} </p> 
        <p className='meaningArea'> ②{props.problems[props.problemIndex]? props.problems[props.problemIndex]["meaning2"]: "now loading..."} </p> 
        <p className='exampleArea'> {props.problems[props.problemIndex]? props.problems[props.problemIndex]["example2"]: "now loading..."} </p> 
        <p className='meaningArea'> ③{props.problems[props.problemIndex]? props.problems[props.problemIndex]["meaning3"]: "now loading..."} </p> 
        <p className='exampleArea'> {props.problems[props.problemIndex]? props.problems[props.problemIndex]["example3"]: "now loading..."} </p> 

    </div>
    );
}

export default AnswerQuiz;
