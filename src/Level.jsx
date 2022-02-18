import React from 'react'

import { Link } from 'react-router-dom'

function Level(props) {
  return (
    
    <Link 
        to={`/categories/${props.level}-${props.chapter}`} 
        className = "chapterLink"
    >
        <div className="boxForChapter">
            <p>
              {props.chapter}
            </p>
        </div>
    </Link>
  )
}

export default Level