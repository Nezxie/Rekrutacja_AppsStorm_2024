import React from 'react'
import Checkbox from './Checkbox.jsx'


function Header({produceType,toggleListVisibility,listVisible,selectAll,deSelectAll}) {

  function checkboxChanged(checkboxValue){
    if(checkboxValue){
      selectAll();
    }
    else{
      deSelectAll();
    }
  }

  return (
    <div className='flex justify-between text-xl'>
      <Checkbox checkBoxChanged={checkboxChanged}/>
      <h2>{produceType}</h2>
      <button onClick={toggleListVisibility}>{listVisible?'↑':'↓'}</button>
  </div>
  )
}

export default Header
