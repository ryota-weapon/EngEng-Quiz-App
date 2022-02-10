import { NavLink } from "react-router-dom";

import  {SignOut}  from "./index";

import React from 'react';

function NavBar() {
  return (
  <div className="NavigationBar">
      <NavLink className={item => item.isActive? "activeNavItem" : "navItem"} to="/home"> ホーム </NavLink>  
      <NavLink className={item => item.isActive? "activeNavItem" : "navItem"} to="/"> ランキング </NavLink>  
      <NavLink className={item => item.isActive? "activeNavItem" : "navItem"} to="/contact-form" > 目安箱 </NavLink>  
      <NavLink className={item => item.isActive? "activeNavItem" : "navItem"} to="/author" > 作者について </NavLink>  
      <NavLink className={item => item.isActive? "activeNavItem" : "navItem"} to="/method" > 英語学習について </NavLink>  
      
      <SignOut  />
  </div>
  );
}

export default NavBar;
