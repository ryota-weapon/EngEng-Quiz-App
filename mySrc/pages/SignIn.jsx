import React from 'react';
import {auth} from "../firebase.js";
import firebase from "firebase/compat/app"

import {Button} from "@mui/material";

function SignIn() {
    const signInWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    
    const signInWithTwitter = ()=>{
        const provider = new firebase.auth.TwitterAuthProvider();
        auth.signInWithPopup(provider);
    }

    const signInWithMailAddress= ()=>{
        const provider = new firebase.auth.EmailAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>

        <div className='SignIn'>
            <button className='myButton' onClick={signInWithGoogle}>グーグルアカウントで始める</button>
            <button className='myButton' onClick={signInWithTwitter}>ツイッターアカウントで始める</button>
            <button className='myButton' onClick={signInWithMailAddress}>メールアドレスで登録</button>
        </div>
        
        <p>登録せずに、いますぐ試す!</p>
        <button className='myButton'> サンプル問題に挑戦 </button>
        
        </div>
    );
}

export default SignIn;
