import React from 'react'

import { Link } from 'react-router-dom';

function NextQuiz(props) {
    var buttonSentence;
    if (props.chapter===10){
        buttonSentence =  "次のレベルに進む";
    }else{
        buttonSentence = "次の章に進む";
    }

    return (
    <div>
        <Link to="" className="">
            {buttonSentence}
        </Link>
    </div>
  )
}

export default NextQuiz