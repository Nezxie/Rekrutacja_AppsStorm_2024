import React from 'react'
import Checkbox from './Checkbox.jsx'

function Header({produceType,toggleListVisibility,listVisible}) {
  return (
    <div className='flex justify-between text-xl'>
      <Checkbox checked={false}/>
      <h2>{produceType}</h2>
      <button onClick={toggleListVisibility}>{listVisible?'↑':'↓'}</button>
  </div>
  )
}

export default Header
