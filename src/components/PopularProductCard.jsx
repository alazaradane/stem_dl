import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, detail}) => {
  return (
    <div className=' flex flex-1 flex-col w-full sm:w-full'>
      <img src={imgURL} alt={name} className=' w-[250px] h-[350px] rounded-md hover:' />
      <div className=' mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width={27} height={24}  />
        <p className=' font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p> 
      </div>
        <h3 className=' mt-2 text-2xl leading-normal font-semibold font-palanquin text-coral-blue '>{name}</h3>
        <p className=' mt-2 font-montserrat text-lg text-slate-700  leading-normal  '>{detail}</p>
    </div>
  )
}

export default PopularProductCard