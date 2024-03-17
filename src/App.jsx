import React, { Component } from 'react'



import SignIn from './pages/SignIn'
import Home from './pages/Home'
import BookPage from './pages/BookPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  
    constructor() {
      super()
      this.state ={
        route:"home"
      }
    }
    
    onRouteChange = (route)=>{
      this.setState({route: route})
    }

    render() {
      return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/bookpage' element={<BookPage/>}/>
          </Routes>
        </BrowserRouter>
      )   
        
    }
}
    
    




export default App
