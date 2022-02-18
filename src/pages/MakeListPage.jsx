import React from 'react'
import AddWord from '../components/Preparation/AddWord'
import GetFile from '../components/Preparation/GetFile';

import {useState, useEffect} from "react";

function MakeListPage() {
    const [wordInfo, setInfo] = useState([]);
    // var wordInfo = [1,1];

    const setWordInfo = (info) => {
        setInfo(info);
    };

    // useEffect( ()=>{
    // },[wordInfo])

    return (
    <div>
        <AddWord 
            wordInfo = {wordInfo}
        />
        
        <p>{wordInfo.length}</p>
        <button onClick={()=>console.log(wordInfo.length)}> how long?</button>
        <GetFile
            onLoadFunc = { setInfo }
        />
    </div>
  )
}

export default MakeListPage