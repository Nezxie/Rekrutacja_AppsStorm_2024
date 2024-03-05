import React from 'react'
import Checkbox from './Checkbox';
function ProductItem({productId,productName,price,checkBoxChanged,checkedValue}) {
  return (
    <div className='flex border-b border-gray-200 p-4 pb-1 justify-between items-baseline'>
      <Checkbox checkBoxChanged={checkBoxChanged} id={productId} checkedValue={checkedValue(productId)} changeAll = {false}/>
      <p>{productName}</p>
      <p>{price ==! null ?price:""}</p>
    </div>
  )
}

export default ProductItem;
