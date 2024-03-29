import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'

import HeroCard from '../components/HeroCard'
import { Link } from 'react-router-dom'

const Hero = ({onRouteChange}) => {
  
  return (
    <section
    id='home'
    className='w-full border-2 py-2 pl-8 pr-2 gap-10 max-container flex flex-col  xl:flex-row  justify-center min-h-screen '
    >
      <div className='relative flex w-2/5 flex-col justify-center items-start  max-xl:padding-x  pt-28 max-sm:w-full max-lg:w-full max-xl:w-full mb-6'>
        <p className=' text-xl font-montserrat text-coral-blue ml-6 mt-10'>Where Ideas Take Flight Discover Our STEM Library</p>
        <h1 className='mt-10 font-palanquin text-[75px] max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' xl:whitespace-nowrap relative z-10 pr-10  '>STEM First</span>
          <br />
          <span className=' inline-block text-coral-blue mt-3'>STEM</span> Library
        </h1>
        <p className=' font-montserrat text-slate-gray text-lg leading-8 mb-14 mt-6 sm:max-w-sm'>
          Embark on a journey of knowledge and innovation with our STEM club's digital library, where curiosity meets boundless learning opportunities.
        </p>
        <Link to={'signin'}>        
          <Button label="Get Started" iconURL={arrowRight} iconAlt={'Right Arrow Icon'} onClick={()=>onRouteChange('#signin')}/>
        </Link>

        <div  className=' flex justify-start items-start gap-16 mt-20 flex-wrap w-full '>
          {statistics.map((stat)=>
          <div key={stat.label}>
            <p className=' text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className=' font-montserrat text-slate-gray leading-7'>{stat.label}</p>
          </div>)}
        </div>
      </div>

      <div className='relative w-full flex justify-center items-center  xl:min-h-screen  py-40  '>
        <HeroCard/>
      </div>


    </section>
  )
}

export default Hero;