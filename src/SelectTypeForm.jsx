import { useForm } from "react-hook-form"
import React from 'react'

export default function SelectTypeForm({fetchProduce}) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => fetchProduce(data.food)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="food-type">Jedzenie</label>
     <select id="food-type" {...register("food")} required={true}>
        <option value="fruits">Owoce</option>
        <option value="vegetables">Warzywa</option>
      </select>
      <input type="submit" value="Wyślij"/>
    </form>
  )
}