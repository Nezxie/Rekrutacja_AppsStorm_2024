import React from 'react'
import Checkbox from './Checkbox';
function ProductItem({isChecked,productName,quantity}) {
  return (
    <div className='flex border-b border-gray-200 p-4 pb-1 justify-between items-baseline'>
      <Checkbox checked={isChecked} />
      <p>{productName}</p>
      <p>{quantity ==! null ?quantity:""}</p>
    </div>
  )
}

export default ProductItem;
