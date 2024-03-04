import Header from './Header.jsx'
import Content from './Content.jsx'
import React from 'react'
import { useState } from 'react';
import SetPriceForm from './SetPriceForm.jsx'



function ListContainer({listOfContent,produceType}) {
  const [listVisible, setListVisible] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);


  function addToSelectedList(id){
    setSelectedProducts([...selectedProducts,id])
  }

  function removeFromSelectedList(id){
    let tmp = selectedProducts.filter(function(item) {
      return item !== id
    })
    setSelectedProducts([tmp]);
  }

  function deSelectAll(){
    setSelectedProducts([]);
  }

  function selectAll(){
    setSelectedProducts([listOfContent.map(product => 
      product.id)]);

  }

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
        <Header produceType={formatHeader(produceType)} toggleListVisibility={toggleListVisibility} listVisible={listVisible} deSelectAll={deSelectAll} selectAll={selectAll}/>
        {/* {listVisible?<Content listOfContent={listOfContent} selectHandle={addToSelectedList} deSelectHandle={removeFromSelectedList}/>:''} */}
      </div>
      : ''
    }
    {produceType&& selectedProducts.length > 0?  
    <SetPriceForm selectedProducts={selectedProducts[0]} productList={listOfContent}/>:''
    }
    </>
  )
}

export default ListContainer
