import React from 'react'
import { headerLogo } from '../assets/images'

const SignUpForm = () => {
  return (
    <section className=' max-container w-full'>
        <div className=' flex items-center justify-center'>
            <img src={headerLogo} alt="logo" width={150} height={150} className=' hover:animate-pulse'/>
            <p>Enjoy reading</p>
        </div>
        <div>
            <form action="">
                <input type="text" />
            </form>
        </div>        
    </section>
  )
}

export default SignUpForm