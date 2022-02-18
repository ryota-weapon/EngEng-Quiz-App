import React from 'react'

import { Outlet } from 'react-router-dom'

function QuizCategoryPage() {
  return (
    <div>
        <h2> Here is a Quiz Page </h2>
        < Outlet />
    </div>
  )
}

export default QuizCategoryPage