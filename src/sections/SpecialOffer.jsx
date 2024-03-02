import React from 'react'
import {tiger} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className=' flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='items-center justify-center flex w-1/2 '>
        <img src={tiger}  className=' w-[1500px] h-[650px] rounded-xl'/>
      </div>
      <div className=' flex flex-col  justify-start mt-12 max-sm:w-full w-1/2 '>
        <h1 className=' font-palanquin text-4xl font-bold mb-5'><span className=' text-coral-red'>Special</span> Offer</h1>
        <p className=' mb-6 font-montserrat text-slate-gray mr-3'>          
          Unlock exclusive savings in our Special Offers section, where limited-time deals await. 
          Dive into discounted books, practice sets, and worksheets tailored to boost 
          your learning journey.
          Don't miss out on these extraordinary offers elevate your studies today!
        </p>
        <p className=' font-montserrat text-slate-gray mr-3'>
          ind exceptional deals that fit your needs and budget. Don't wait 
          – seize the opportunity to elevate your learning experience today!
        </p> 
        <div className=' mt-6 flex flex-wrap gap-4'>
         <Button label={'Get Started'} iconURL={arrowRight}/>
         <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>     
          
      </div>
    </section>
  )
}

export default SpecialOffer