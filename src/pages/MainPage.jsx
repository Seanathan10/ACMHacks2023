import React from 'react'

import { useNavigate } from 'react-router-dom'

function MainPage() {
  const nav = useNavigate();

  return (
    <div>
      <h1>MainPage</h1>

      <button onClick={ () => nav( "1" ) }>Page 1</button>
      <button onClick={ () => nav( "2" ) }>Page 2</button>
    </div>
  )
}

export default MainPage