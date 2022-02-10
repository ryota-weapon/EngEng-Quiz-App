import React from 'react';

// import SelectMode from '../components/SelectMode';

import Mode from "../components/Mode";

import {auth} from "../firebase";

function Home() {
    const selfLearningInfo={
      title: "1人で学習",
      discription: "厳選された単語をレベル別で学習することが出来ます。\n中学校レベルの単語から大学受験、TOEICなどまで対応しています。",
      pathname: "/self-learning"
    }

    const battleInfo={
      title: "オンラインバトル(準備中）",
      discription: "1対1での早押し対戦です。ワクワクするバトルを楽しみながら、英語の反射神経を養いましょう。",
      pathname: "/online-battle"
    }

    const makeWordlistInfo={
      title: "単語帳を自作する(準備中）",
      discription: "自分だけの単語帳を作り、効果的に勉強しましょう。写真を撮り、単語を囲むだけで、簡単に作成可能。作成した単語帳は他のユーザーと共有することもできます。",
      pathname: "/self-learning"
    }

    return (
  <div className='contentContainer'>
      <p>こんにちは、{auth.currentUser.displayName}さん</p>
      <p>モードを選択して、学習しましょう</p>

      <div id="modesContainer">
        <Mode 
          title={selfLearningInfo.title}
          discription={selfLearningInfo.discription}
          pathname={selfLearningInfo.pathname}
          />

        <Mode 
          title={battleInfo.title}
          discription={battleInfo.discription}
          pathname={battleInfo.pathname}
          />

        <Mode 
          title={makeWordlistInfo.title}
          discription={makeWordlistInfo.discription}
          pathname={makeWordlistInfo.pathname}
          />

      </div>

      {/* <SelectMode></SelectMode> */}
  </div>
  );
}

export default Home;
