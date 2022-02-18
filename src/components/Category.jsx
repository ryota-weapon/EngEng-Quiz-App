import React from 'react';

import {Link} from "react-router-dom";

import Level from '../Level';

function Category(props) {

  const chapters = [1,2,3,4,5,6,7,8,9,10]; 

  return (
      <div className='categoryContainer'>
            <p>level : {props.level}</p>
            <p>{props.discription}</p>

            <div id="chaptersContainer">
              {chapters.map((chapter, id)=>(
                <Level
                  level = {props.level}
                  chapter = {chapter}
                  key = {id}
                />
              ))}
            </div>
        </div>
  );
}

export default Category;
