import Header from './Header.jsx'
import Content from './Content.jsx'
import React from 'react'
import { useState } from 'react';



function ListContainer({listOfContent,produceType}) {
  const [listVisible, setListVisible] = useState(true);
  function toggleListVisibility(){
    setListVisible(!listVisible)
  }
  function formatHeader(formOutput){
    if(formOutput == 'fruits')
      return 'Owoce';
    if(formOutput == 'vegetables')
    return "Warzywa";
  }
  return (
    <>
    {produceType?
      <div className=' my-4'>
        <Header produceType={formatHeader(produceType)} toggleListVisibility={toggleListVisibility} listVisible={listVisible}/>
        {listVisible?<Content listOfContent={listOfContent}/>:''}
      </div>
      : ''
    }
    </>
  )
}

export default ListContainer
