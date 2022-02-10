import React from 'react';
import SignIn from "./SignIn";

function Landing() {
  return (
  <div className='contentContainer'>
      {/* <img src="space1.jpg" alt="not found" />  */}
      <p>ようこそ、英英辞書クイズへ</p>
      <p>クイズ形式で楽しみながら、英語の意味を学習できる</p>
      <p>あなたの英単語の理解を一歩先に</p>
      
      <SignIn />
  </div>
  );
}

export default Landing;
