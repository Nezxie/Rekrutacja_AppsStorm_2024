import React from 'react'
import ProductItem from './ProductItem';

export default function Content({listOfContent, checkBoxChanged, checkedValue}) {
    const listItems = listOfContent.map(product => 
    <ProductItem key={product.id} productId={product.id} productName={product.name} price={product.price} checkBoxChanged={checkBoxChanged} checkedValue={checkedValue}/>
    );

  return (
    <div>
      {listItems}
    </div>
  )
}
