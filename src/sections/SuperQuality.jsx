import React from 'react'
import Button from '../components/Button'
import { superImage } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id='about-us' 
      className=' flex flex-1 flex-row max-sm:flex-col max-lg:flex-col w-full max-container mt-5 py-4 px-6'>
      <div className=' flex flex-col w-1/2 justify-start mt-12 max-sm:w-full max-md:justify-center max-md:items-center '>
        <h1 className=' font-palanquin text-4xl font-bold mb-5'>We Provide You <span className=' text-coral-blue'>Super Quality</span> Books</h1>
        <p className=' mb-6 font-montserrat text-slate-gray text-lg leading-6'>
          Dive into our Super Quality page, where meticulously curated books, practice sets, and 
          worksheets await. Elevate your learning experience with top-tier resources 
          designed to inspire and empower your journey.
        </p>
        <p className=' font-montserrat text-slate-gray text-lg leading-6'>
          Experience the difference with our SuperQuality section, driven by AI for precision and efficiency. 
          Our customer-centric approach delivers actionable insights, ensuring success in a competitive world. 
          Choose us for innovation and excellence that exceeds expectations
        </p> 
        <div className=' mt-6 flex'>
         <Button label={`Show details`}/>
        </div>     
          
      </div>
      <div className=' ml-16 max-sm: flex items-center justify-center mt-6 w-1/2'>
        <img src={superImage} alt={superImage} className=' object-contain rounded-xl' />
      </div>

    </section>
  )
}

export default SuperQuality