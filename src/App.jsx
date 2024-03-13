import React, { Component } from 'react'



import SignIn from './pages/SignIn'
import Home from './pages/Home'
import BookPage from './pages/BookPage'

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
        if (this.state.route === 'home') {
          return <Home onRouteChange={this.onRouteChange} />;
        }
        if(this.state.route === 'signin'){
          return <SignIn onRouteChange={this.onRouteChange}/>
        }
        
      }
        
    
}
    
    




export default App
