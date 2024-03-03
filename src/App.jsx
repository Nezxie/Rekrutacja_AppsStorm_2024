import SelectTypeForm from './SelectTypeForm.jsx'
import ListContainer from './ListContainer.jsx'
import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
function fetchProduceList(type){
       fetch('http://localhost:8000/'+type)
          .then((res) => res.json())
          .then((data) => {
            setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    };

  return (
    <>
      <SelectTypeForm fetchProduce={fetchProduceList}/>
      <ListContainer listOfContent={posts} produceType={posts}  />
    </>
  )
}

export default App
