import React from 'react'

import SignForm from '../components/SignForm'
import { headerLogo, meet } from '../assets/images'

const SignIn = ({onRouteChange}) => {
  return (
    <section
        id='#signin'
        className=' flex max-sm:flex-col-reverse max-md:flex-col-reverse'
    >
        <div>
          <img src={meet} alt="Image" height=' h-screen' className=' max-sm:hidden max-md:hidden ' />  
        </div>
        <div className=' flex mx-auto h-screen'>
            <SignForm email password onRouteChange={()=>onRouteChange('#book')}/>
        </div>
    </section>
  )
}

export default SignIn