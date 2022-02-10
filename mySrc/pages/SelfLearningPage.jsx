import React from 'react';

// import {Mode} from "./index";
import Category from "../components/Category";

import {Link} from "react-router-dom";

function SelfLearningPage() {
  const categories = ["easy", "medium", "hard", "大学受験", "TOEIC", "fae", "faef", "feajn", "invl", "fa", "fe"];
  return (
  <div className='contentContainer'>

      {/* <Link to="/home">ホームに戻る</Link> */}

      <p> 挑戦するカテゴリーを選んでください。</p>
      <p>カテゴリー一覧</p>

      <div id="categoriesContainer">
        {categories.map((title,id)=>(
            <Category 
            key = {id}
            title={title}
            discription={"説明:がんばれ～～～～～～～～～～～～～～～～～～～～～～～～～～～"}
            />
            ))}
        </div>
    </div>
      );
}

export default SelfLearningPage;
