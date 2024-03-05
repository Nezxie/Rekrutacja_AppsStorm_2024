import Header from './Header.jsx'
import Content from './Content.jsx'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SetPriceForm from './SetPriceForm.jsx'



function ListContainer({listOfContent,produceType,handleError,cookieAddPrices}) {
  const [isListVisible, setisListVisible] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [headerCheckbox, setHeaderCheckbox] = useState(false);
  const [selectedNameList, setselectedNameList] = useState("");
  
  useEffect(() => {
    let name = "";
    for(let product of listOfContent){
      if(selectedProducts.includes(product.id)){
        name+=product.name;
        name+=", ";
      }
    }
    name=name.slice(0,-2);
    setselectedNameList(name);
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

  function checkBoxChanged(checkedValue,id, changeAll){
    if(changeAll){
      if(checkedValue){
        selectAll();
        setHeaderCheckbox(true);
    }
      else{
        deSelectAll()
        setHeaderCheckbox(false);
      }
    }
    else{
      if(checkedValue)
        addToSelectedList(id)
      else{
        removeFromSelectedList(id)
      }
    }
  }

  function isCheckboxChecked(id,checkedList=selectedProducts){
    if(checkedList.includes(id))
      return true;
    return false;
  }

  function addToSelectedList(id){
    setSelectedProducts([...selectedProducts,id])
  }

  function removeFromSelectedList(id){
    let tmp = selectedProducts.filter(function(item) {
      return item !== id
    })
    setSelectedProducts(tmp);
  }

  function deSelectAll(){
    setSelectedProducts([]);
  }

  function selectAll(){
    setSelectedProducts(listOfContent.map(product => 
      product.id));

  }
  
  function addPrice(price){
    cookieAddPrices(price,selectedProducts);
  }
  
  function toggleListVisibility(){
    setisListVisible(!isListVisible)
  }
  return (
    <>
    {produceType?
      <div className=' my-4'>
        <Header produceType={formatHeader(produceType)} toggleListVisibility={toggleListVisibility} isListVisible={isListVisible} checkBoxChanged={checkBoxChanged} checkedValue={headerCheckbox}/>
        {isListVisible?<Content listOfContent={listOfContent} checkBoxChanged={checkBoxChanged} checkedValue={isCheckboxChecked}/>:''}
      </div>
      : ''
    }
    {produceType&& selectedProducts.length > 0?  
    <SetPriceForm selectedNameList={selectedNameList} handleError={handleError} addPrice={addPrice}/>:''
    }
    </>
  )
}

export default ListContainer
