import SelectTypeForm from './SelectTypeForm.jsx'
import ListContainer from './ListContainer.jsx'
import ErrorMessage from './ErrorMessage.jsx'
import React from 'react'
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [productType, setProductType] = useState();
  const [error, setError] = useState();

function fetchProduceList(type){
  if(type == 'none'){
    setProductType(undefined);
    return;
  }
       fetch('http://localhost:8000/'+type)
          .then((res) => res.json())
          .then((data) => {
            setProductType(type);
            setPosts(data);
            setError(undefined);
          })
          .catch((err) => {
            setProductType(undefined);
            setError(err.message);
          });
    };

function handleValidationError(isError,msg){
  if(isError)
    setError(msg);
  else
  setError();
}

function addPrices(price,selectedProducts){
  let currentObj = posts.slice();
  for(let item of currentObj){
    if(selectedProducts.includes(item.id)){
      item.price = price;
    }
  }
    if(posts !== currentObj){
      setPosts(currentObj);
    }
  }

  return (
    <div className='flex flex-col my-0 mx-auto max-w-3xl text-l font-poppins'>
      {error?<ErrorMessage errorMsg={error} />:''}
      <SelectTypeForm fetchProduce={fetchProduceList} handleError={handleValidationError}/>
      <ListContainer listOfContent={posts} produceType={productType} handleError={handleValidationError} addPrices={addPrices}/>
    </div>
  )
}

export default App
