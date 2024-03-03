import Header from './Header.jsx'
import Content from './Content.jsx'
import React from 'react'


function ListContainer({listOfContent,}) {
  return (
    <>
      <Header produceType={'Owoce'} toggleListVisibility={console.log('togglev')}/>
      <Content listOfContent={listOfContent}/>
    </>
  )
}

export default ListContainer
