import React from 'react'
import ProductItem from './ProductItem';
function Content({listOfContent}) {
    const listItems = listOfContent.map(product => 
    <ProductItem key={product.id} isChecked={false} productName={product.name} quantity={product.qty} />
    );
  return (
    <div>
      {listItems}
    </div>
  )
}

export default Content
