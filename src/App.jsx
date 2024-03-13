import React, { Component } from 'react'



import SignIn from './pages/SignIn'
import Home from './pages/Home'

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
        <div>

           
           {this.state.route==='home' ?
            <Home onRouteChange={this.onRouteChange}/>
            :
            <SignIn onRouteChange={this.onRouteChange}/>
            
          }
        </div>
    )
    }
    
    

}


export default App
