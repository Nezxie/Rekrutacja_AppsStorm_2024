import React from 'react'
function ProductItem({isChecked,productName,quantity}) {
  return (
    <>
    <input type='checkbox' value={isChecked}/>
    <p>{productName}</p>
    <p>{quantity ==! null ?quantity:""}</p>
    </>
  )
}

export default ProductItem;
