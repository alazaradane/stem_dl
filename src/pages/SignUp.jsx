import React from 'react'
import SignUpForm from '../components/SignUpForm'
import { tiger } from '../assets/images'

const SignUp = () => {
  return (
    <section
      id='#sign-up'
      className=' max-container flex-1 flex'>
        <div>
          <img src={tiger} alt="image" />
        </div>
        <div>
          <SignUpForm/>
        </div>

    </section>
  )
}

export default SignUp