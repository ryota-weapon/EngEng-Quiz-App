import React from 'react';
import {Link} from "react-router-dom";
function BattlePage() {
  return (
  <div className='contentContainer'>
      <Link to="/home">ホームに戻る</Link>
      <p> バトルページです。</p>
      <p>あなたのレートはnです</p>
    </div>
    );
}

export default BattlePage;
