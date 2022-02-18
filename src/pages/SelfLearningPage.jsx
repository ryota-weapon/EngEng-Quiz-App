import React from 'react';

// import {Mode} from "./index";
import Category from "../components/Category";
import Level from '../Level';

import {Link} from "react-router-dom";

import {db} from "../firebase";
import {useState, useEffect} from "react";

function SelfLearningPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedLevel, setClickedLevel] = useState(-1);

  const [categories, setCategories] = useState([]);
  useEffect( ()=>{
    const getCategories = async ()=>{
      let data = []
      await db.collection("categories").get().then(
        snapshot => {
          snapshot.forEach(
            doc => { data.push(doc.data()) }
          )
        }
      )
      setCategories(data);
    };  
    getCategories();
  }, [])

  const levelClickedFunc = (level)=>{
    setIsClicked(true);
    setClickedLevel(level);
  }

  const chapters = [1,2,3,4,5,6,7,8,9,10]; 

  const showLevelsOfChapters = ()=>{
    if (isClicked){
      return (
        <div>
          choose chapter
          <p>level: {clickedLevel}  </p>
          
          <div id="chaptersContainer">
            {chapters.map((chapter, id)=>(
              <Level
                chapter = {chapter}
                level = {clickedLevel}
                key = {id}
              />
            ))}
          </div>
          
          <button onClick={()=>{
            setIsClicked(false);
          }}>
            Back
          </button>
        </div>
      )
    }else{
      return (
          categories.map((category,id)=>(
            <Category 
              key = {id}
              level={category.level}
              discription={"説明:"+category.discription}
              onClickFunc = {levelClickedFunc}
            />
      )))
    }
  }

  return (
  <div className='contentContainer'>

      {/* <Link to="/home">ホームに戻る</Link> */}

      <p> 挑戦するカテゴリーを選んでください。</p>
      <p>カテゴリー一覧</p>

      <div id="categoriesContainer">
            {showLevelsOfChapters()}
        </div>
    </div>
    );
}

export default SelfLearningPage;
