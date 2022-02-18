import React from 'react';

import {auth} from "../firebase";
import {signOut} from "firebase/auth";

import {Button} from "@mui/material";

import {Navigate, useNavigate} from "react-router-dom";

function SignOut() {
  const user = auth.currentUser;
  const signOutGoHome = (auth)=>{
    signOut(auth);
    navigate("/");
  }
  const navigate = useNavigate();

  return (
  <div className='navItem signOut' >
      <Button onClick={() => signOutGoHome(auth)}> Sign Out </Button>
      <img 
        className='userIcon' 
        src={user? user.photoURL: "icon_unknown.png"} 
        alt="" 
        // onClick=  
      />
  </div>
  );
}

export default SignOut;
