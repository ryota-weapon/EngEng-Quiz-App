import React from 'react';

import {Link} from "react-router-dom";


function Category(props) {
  return (
      <div className='categoryContainer'>
        <Link to={`/categories/${props.title}`} className='categoryLink'> 
          <div className="boxForSize">
            <p>{props.title}</p>
            <p>{props.discription}</p>
          </div>
        </Link>
      </div>
  );
}

export default Category;
