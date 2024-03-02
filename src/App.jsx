import React from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>

      {/* <Home/> */}
    </>

  )
}

export default App