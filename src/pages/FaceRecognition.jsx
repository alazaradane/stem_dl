import React from 'react'
import { headerLogo } from '../assets/images'
import Button from '../components/Button'
import ImageLinkForm from '../sections/ImageLinkForm'
import Rank from '../components/Rank'


const FaceRecognition = () => {


  return (
    <section 
        id='#main'
        className=' max-container bg-black h-screen '>
     
        <nav className=' flex justify-between items-center'>
            <img src={headerLogo} alt="Logo" width={100} height={100} />
            <Button label="Sign Out"/>
        </nav>
        <div className=' flex justify-center items-center '>
            <Rank/>
        </div>
        <div className=' flex justify-center items-center'>
            <ImageLinkForm/>
        </div>
        
    </section>
  )
}

export default FaceRecognition