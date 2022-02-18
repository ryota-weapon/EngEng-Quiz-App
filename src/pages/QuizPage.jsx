import {useState, React} from 'react';
import {useParams , Link} from "react-router-dom";

import Quiz from "../components/Quiz";


function QuizPage(props) {

  const paramInfo = useParams()["level"];
  const level = paramInfo[0];
  const chapter = parseInt(paramInfo.substring(2, paramInfo.length));

  return (
    <div className="contentContainer">      
      <Link to="/self-learning" className="backToList">一覧へ戻る</Link>
        <Quiz 
          level = {level}
          chapter = {chapter}
        />
    </div>
    );
}

export default QuizPage;
