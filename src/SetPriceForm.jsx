import { useForm } from "react-hook-form"
import React from 'react'

export default function SetPriceForm({selectedProducts,productList}) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  function selectedProductName(selectedProducts){
    let name = "";
    for(let product of productList){
      if(selectedProducts.includes(product.id)){
        name+=product.name;
        name+=", ";
      }
    }
    name=name.slice(0,-2);
    return name;
    }

  return (
    <form className='flex flex-col w-1/2 items-start gap-5 my-4'  onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="price">{selectedProductName(selectedProducts)}</label>
     <input id="price" {...register("price")} required={true} placeholder={'Cena...'} className="py-2.5 pl-4 pr-6 rounded-xl text-gray-700 bg-white border border-gray-700" />
      <input type="submit" value="Dodaj cenę" className="bg-black py-2 px-8 text-white border border-black rounded-xl cursor-pointer hover:bg-white hover:text-black"/>
    </form>
  )
}