import React from 'react';

import {useState, useEffect} from "react";

import {db} from "../firebase.js";

import {Result, AnswerQuiz} from "./index"

// import {TextField} from "mui@material"
import {Input} from "@mui/material";

// import {where} from "firebase/firebstore";

function Quiz(props) { 
    const [isFinished, setIsFinished] = useState(false);
    //problemIndex===-1とかと、isFinishedの意味あいがかぶる
    //isFinishedが終わったときに更新されるが、その時にもデータの取得が行われてしまう。
    const [answeredIndex, setAnsweredIndex] = useState([]);

    const [quizzes, setQuizzes] = useState([]);
    const [problemIndex, setProblemIndex] = useState(0);
    const [inputAnswer, setInputAnswer] = useState("");

    const wrongAnswerEffect = ()=>{
        alert("wrong");
    }

    useEffect( ()=>{
        const get_info = async ()=>{
            const info = await db.collection("categories")
                .where("level", "==", props.level)
                .get();
            const category_id = await info.docs[0].id;
            
            const problems = [];
            const _problems = await db.collection("problems")
                .where("category_id", "==", category_id)
                .where("chapter", "==", props.chapter)
                .get();
            _problems.forEach(doc =>{
                problems.push(doc.data());
            });
            setQuizzes(problems);
        }
        get_info();
    },[isFinished]);

    const initFunc = ()=>{
        setProblemIndex(0);
        setIsFinished(false);
    }

    const skipQuestion = () => {
        setAnsweredIndex(prev => [...prev, 0]);
        if (problemIndex === quizzes.length-1){
            setProblemIndex(-1);
        }else{
            setProblemIndex(prev => prev + 1);
        }
    }

    const checkAnswer = (e)=>{
        e.preventDefault();
        if (inputAnswer === quizzes[problemIndex]["word"]){
            setAnsweredIndex(prev => [...prev, 1]);
            setInputAnswer("");
            setProblemIndex(prev => prev + 1);
            if (problemIndex === quizzes.length-1){  
                setIsFinished(true);
                setProblemIndex(-1);
                console.log("clear");
            }

        }else{
            console.log("wrong Answer");
            wrongAnswerEffect();
        }

    }

    return (
        
        <div className='quizArea' >
            <div>                            
                { problemIndex===-1? <Result answeredIndex={answeredIndex} initFunc={initFunc} problems={quizzes} level={props.level} chapter={props.chapter}/> : <AnswerQuiz problems={quizzes} problemIndex={problemIndex} />}
            
                { problemIndex!==-1? 
                    <div>
                        <form action="" onSubmit={checkAnswer}>
                        <Input 
                            type="text" 
                            id = "AnswerArea"
                            value={inputAnswer} 
                            onChange={e => setInputAnswer(e.target.value)}
                            placeholder='Answer here...'
                            />
                        </form>
                        <button onClick={skipQuestion}>skip</button>
                    </div>
                    : ""}
                
            </div>
        </div>
    );
}

export default Quiz;
