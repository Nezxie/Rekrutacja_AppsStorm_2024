import React from 'react'
import ProductItem from './ProductItem';
function Content({listOfContent,selectHandle,deselectHandle}) {
    const listItems = listOfContent.map(product => 
    <ProductItem key={product.id} productId={product.id} isChecked={false} productName={product.name} price={product.price} selectHandle={selectHandle} deselectHandle={deselectHandle}/>
    );
  return (
    <div>
      {listItems}
    </div>
  )
}

export default Content
