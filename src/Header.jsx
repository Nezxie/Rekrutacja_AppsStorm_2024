import React from 'react'
import Checkbox from './Checkbox.jsx'


function Header({produceType,toggleListVisibility,listVisible, checkBoxChanged, checkedValue}) {

  return (
    <div className='flex justify-between text-xl'>
      <Checkbox checkBoxChanged={checkBoxChanged} id={'master'} changeAll={true} checkedValue={checkedValue}/>
      <h2>{produceType}</h2>
      <button onClick={toggleListVisibility}>{listVisible?'↑':'↓'}</button>
  </div>
  )
}

export default Header
