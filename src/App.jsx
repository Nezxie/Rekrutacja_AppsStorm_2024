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

  return (
    <div className='flex flex-col my-0 mx-auto max-w-3xl text-l font-poppins'>
      {error?<ErrorMessage errorMsg={error} />:''}
      <SelectTypeForm fetchProduce={fetchProduceList}/>
      <ListContainer listOfContent={posts} produceType={productType}  />
    </div>
  )
}

export default App
