import React from 'react'
import Home from './home/home'
import Login from './login/login'
import Userhome from './usercomps/userhome'
import Usermaps from './usercomps/usermaps'
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
       <Userhome/>
    )
  }
}


export default App