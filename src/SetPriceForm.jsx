import { useForm } from "react-hook-form"
import React from 'react'

export default function SetPriceForm({nameList,handleError, addPrice}) {
  const { register, handleSubmit } = useForm()
  const onSubmit = function(data){
    if(!/^\d+(?:[,.]\d{1,2})?$/.test(data.price)){
      handleError(true,"Proszę wpisać w pole jedynie cyfry. Części dziesiętne należy oddzielić kropką lub przecinkiem.")
    }
    else{
      handleError(false);
      addPrice(data.price);
    }
  }

  return (
    <form className='flex flex-col w-1/2 items-start gap-5 my-4'  onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="price">{nameList}</label>
     <input id="price" {...register("price")} required={true} placeholder={'Cena...'} className="py-2.5 pl-4 pr-6 rounded-xl text-gray-700 bg-white border border-gray-700" />
      <input type="submit" value="Dodaj cenę" className="bg-black py-2 px-8 text-white border border-black rounded-xl cursor-pointer hover:bg-white hover:text-black"/>
    </form>
  )
}