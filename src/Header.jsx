import React from 'react'

function Header({checkAll,produceType,toggleListVisibility}) {
  return (
    <>
      <input type='checkbox'/>
      <h2>{produceType}</h2>
      <button>&darr;</button>
  </>
  )
}

export default Header
