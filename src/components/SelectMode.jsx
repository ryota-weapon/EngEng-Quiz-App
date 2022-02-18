import React from 'react';
import Mode from "./Mode2";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import {Button} from "@mui/material";

import {auth} from "../firebase";

function SelectMode() {
    
    const user = auth.currentUser;

    return (
        <div>
            <p>こんにちは、{user.displayName}さん</p>
            <h2>モードを選択してください</h2>
            <Link to="self-learning">1人で学習する </Link>
            <Link to="online-battle">オンライン対戦で学習</Link>

        </div>

  );
}

export default SelectMode;
