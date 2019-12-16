import React from 'react'
import Home from './home/home'
import Login from './login/login'
import Userhome from './usercomps/userhome'
import Companyhome from './companycomps/companyhome'

class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
       <Companyhome/>
    )
  }
}


export default App