import React from 'react';
import NextQuiz from './NextQuiz';

import { Link } from 'react-router-dom';

function Result(props) {

  var nextURL = "";
  if (props.chapter===10) nextURL= `${parseInt(props.level)+1}-1`;
  else nextURL = `${props.level}-${props.chapter+1}`;
  console.log(props.answeredIndex);
  return (
    <div>
        <p>Good Job!</p>
        <p>You've completed {props.level}-{props.chapter}!</p>
        <ul id = "answersList">
          {props.problems.map((problem,id) => (
            <li key={id}>
              Q{id+1} {problem["word"]} 
              <p>{props.answeredIndex[id]? "o": "x" }</p>
            </li> 
          ))}
        </ul>


        {/* <Link to={"/categories/"+ props.title}> */}
        <Link 
          to={`/categories/${nextURL}`} 
          className="toNextLink"
          onClick = {props.initFunc}
        >
          次に進む
        </Link>

    </div>
  );
}

export default Result;
