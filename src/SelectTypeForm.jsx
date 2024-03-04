import { useForm } from "react-hook-form"
import React from 'react'

export default function SelectTypeForm({fetchProduce,handleError}) {
  const { register, handleSubmit } = useForm()
  const onSubmit = function(data){
    if(data.food == 'none'){
      handleError(true,'Proszę wybrać jedną z kategorii.');
    }
    else{
      handleError(false);
      return fetchProduce(data.food)
    }
  }

  return (
    <>
    <form className='flex flex-col w-1/2 items-start gap-5 my-4'  onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="food-type">Jedzenie</label>
     <select id="food-type" {...register("food")} required={true} className="py-2.5 pl-4 pr-6 rounded-xl text-gray-700 bg-white border border-gray-700">
        <option value="none">Wybierz...</option>
        <option value="fruits">Owoce</option>
        <option value="vegetables">Warzywa</option>
      </select>
      <input type="submit" value="Wyślij" className="bg-black py-2 px-8 text-white border border-black rounded-xl cursor-pointer hover:bg-white hover:text-black"/>
    </form>
    </>
  )
}