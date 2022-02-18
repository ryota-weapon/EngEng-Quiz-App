import React from 'react';
import {Link} from "react-router-dom";

function Mode(props) {
  return (
    <div className="modeContainer">
        <Link to={props.pathname}className='modeLink'>
            <div className="boxForMode">
              <h2>{props.title}</h2>
              <p>{props.discription}</p>
            </div>
        </Link>
    </div>
  );
}

export default Mode;
