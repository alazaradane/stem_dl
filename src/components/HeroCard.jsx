import React from 'react'
import { hero1 } from '../assets/images'

const HeroCard = () => {
  return (
    <div className=' max-container flex flex-col justify-center'>
        {/* <div className=' object-contain flex gap-1 '>
            <img src={hero2} alt="hero2" width={300} height={300} className=' rounded'/>
            <img src={hero1} alt="hero1" width={300} height={300} className=' rounded'/>
        </div>
        <div className=' flex justify-center mt-1'>
            <img src={hero3} alt="hero3" width={600} height={600} className=' rounded'/>
        </div> */}
        <div>
          <img src={hero1} alt="hero1" className=' max-container flex flex-col justify-center mb-9 ml-2' width={700} height={700} />
        </div>
    </div>
  )
}

export default HeroCard