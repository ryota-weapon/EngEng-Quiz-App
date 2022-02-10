import React from 'react';
import {Link} from "react-router-dom";

import Quiz from "../components/Quiz";


function QuizPage(props) {
  return (
    <div>      
      <Link to="/self-learning" className="backToList">一覧へ戻る</Link>
        <Quiz 
          title = {props.title}
        />
    </div>
    );
}

export default QuizPage;
