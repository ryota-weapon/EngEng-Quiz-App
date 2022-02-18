import {SignOut, } from "./index";

import {Link} from "react-router-dom";

import React from 'react';

import NavBar from "./NavBar";

function Header() {
  return (
  <div id="header">
        <h1> 英英辞書クイズ</h1>
        <NavBar></NavBar>
        
  </div>
  );
}

export default Header;
