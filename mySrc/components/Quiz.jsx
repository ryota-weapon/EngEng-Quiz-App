import React from 'react';

import {useState, useEffect} from "react";

import {db} from "../firebase.js";

import {Result, AnswerQuiz} from "./index"

// import {TextField} from "mui@material"
import {Input} from "@mui/material";

// import {where} from "firebase/firebstore";

function Quiz(props) {    
    const [quizzes, setQuizzes] = useState([]);
    const [quiz, setQuiz] = useState({});
    
    const [problemIndex, setProblemIndex] = useState(0);

    const [inputAnswer, setInputAnswer] = useState("");

    //snapshotは変化したら、毎回取得
    //今回はページ遷移時に一回取れればよいはず

    useEffect( ()=>{
        const get_info = async ()=>{
            const info = await db.collection("categories")
                .where("title", "==", props.title).get();
            const quizId = await info.docs[0].id;
            setQuiz(info.docs[0].data());
            
            const problems = [];
            const _problems = await db.collection("problems")
                .where("category_id", "==", quizId).get();
            _problems.forEach(doc =>{
                problems.push(doc.data());
            });
            setQuizzes(problems);
        }
        get_info();
    },[]);


    const checkAnswer = (e)=>{
        e.preventDefault();
        if (inputAnswer === quizzes[problemIndex]["answer"]){
            setInputAnswer("");
            setProblemIndex(prev => prev + 1);
        }else{
            console.log("wrong Answer");
        }

        if (problemIndex === quizzes.length-1){  //最後の問題は、何を答えても突破されます
            setProblemIndex(-1);
            console.log("clear");
            //エラーが起きちゃう
            //リザルトページを見せたい
        }
    }

    return (
        <div className='quizArea' >
            <div>                
                <p>{`タイトル:${quiz.title}`}</p>
                <p>{ `説明:${quiz.discription}`}</p>
                <p>問題の数は、{quizzes.length}問です。</p>
                <p>Q {problemIndex+1}</p>
            
                {problemIndex === -1?  <Result title = {props.title} /> : <AnswerQuiz quiz={quizzes[problemIndex]} />}
            
                {problemIndex !== -1? 
                    <form action="" onSubmit={checkAnswer}>
                    <Input 
                        type="text" 
                        id = "AnswerArea"
                        value={inputAnswer} 
                        onChange={e => setInputAnswer(e.target.value)}
                        placeholder='Answer here...'
                    />
                    </form> : ""}
                
            </div>
        </div>
    );
}

export default Quiz;

// function Quiz(props) {    
//     const [quizzes, setQuizzes] = useState([]);
//     const [quiz, setQuiz] = useState({});
    
//     const [problemIndex, setProblemIndex] = useState(0);

//     const [inputAnswer, setInputAnswer] = useState("");

//     //snapshotは変化したら、毎回取得
//     //今回はページ遷移時に一回取れればよいはず

//     useEffect( ()=>{
//         const get_info = async ()=>{
//             const info = await db.collection("categories")
//                 .where("title", "==", props.title).get();
//             const quizId = await info.docs[0].id;
//             setQuiz(info.docs[0].data());
            
//             const problems = [];
//             const _problems = await db.collection("problems")
//                 .where("category_id", "==", quizId).get();
//             _problems.forEach(doc =>{
//                 problems.push(doc.data());
//             });
//             setQuizzes(problems);
//         }
//         get_info();
//     },[]);


//     const checkAnswer = (e)=>{
//         e.preventDefault();
//         if (inputAnswer === quizzes[problemIndex]["answer"]){
//             setInputAnswer("");
//             setProblemIndex(prev => prev + 1);
//         }else{
//             console.log("wrong Answer");
//         }

//         if (problemIndex === quizzes.length-1){
//             console.log("clear");
//             //エラーが起きちゃう
//             //リザルトページを見せたい
//         }
//     }

//     return (
//         <div className='quizArea'>

//         <p>{`タイトル:${quiz.title}`}</p>
//         <p>{ `説明:${quiz.discription}`}</p>
//         <p>問題の数は、{quizzes.length}問です。</p>
//         <p>Q {problemIndex+1}</p>
//         <p>{quizzes.length!==0? quizzes[problemIndex]["question"]: "hoge"}</p> 
//         <form action="" onSubmit={checkAnswer}>
//             <input 
//                 type="text" 
//                 value={inputAnswer} 
//                 onChange={e => setInputAnswer(e.target.value)}
//             />
//         </form>
//     </div>
//     );
// }

// export default Quiz;
