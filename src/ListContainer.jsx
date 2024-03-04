import Header from './Header.jsx'
import Content from './Content.jsx'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SetPriceForm from './SetPriceForm.jsx'



function ListContainer({listOfContent,produceType}) {
  const [listVisible, setListVisible] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [nameList, setNameList] = useState("");

  
  useEffect(() => {
    let name = "";
    for(let product of listOfContent){
      if(selectedProducts.includes(product.id)){
        name+=product.name;
        name+=", ";
      }
    }
    name=name.slice(0,-2);
    setNameList(name);
  },[selectedProducts]);

  useEffect(() => {
    deSelectAll();
  },[produceType])

  
    function formatHeader(formOutput){
      if(formOutput == 'fruits')
        return 'Owoce';
      if(formOutput == 'vegetables')
      return "Warzywa";
    }
  
  function addToSelectedList(id){
    changeProductSelection([...selectedProducts,id])
  }

  function removeFromSelectedList(id){
    let tmp = selectedProducts.filter(function(item) {
      return item !== id
    })
    changeProductSelection(tmp);
  }

  function deSelectAll(){
    changeProductSelection([]);
  }

  function selectAll(){
    changeProductSelection([listOfContent.map(product => 
      product.id)]);

  }

  function toggleListVisibility(){
    setListVisible(!listVisible)
  }
  function changeProductSelection(value){
    setSelectedProducts(value)
  }

  return (
    <>
    {produceType?
      <div className=' my-4'>
        <Header produceType={formatHeader(produceType)} toggleListVisibility={toggleListVisibility} listVisible={listVisible} deSelectAll={deSelectAll} selectAll={selectAll}/>
        {listVisible?<Content listOfContent={listOfContent} selectHandle={addToSelectedList} deselectHandle={removeFromSelectedList}/>:''}
      </div>
      : ''
    }
    {produceType&& selectedProducts.length > 0?  
    <SetPriceForm nameList={nameList}/>:''
    }
    </>
  )
}

export default ListContainer
