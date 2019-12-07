import React from 'react'
import './userhome.css'
import Navbar from './navbar'
import Reqmechanicjumb from './reqmechanicjumb'
import Requestmechanics from './requestmechanics'
import {BrowserRouter as Router, Switch,Route, link} from 'react-router-dom'

class Userhome extends React.Component{ 
    constructor(){
        super()
    }
    render(){
        return(
            <Router>
            <div className="userhome">
            <Navbar/>
            <Switch>
            <Route path="/" exact component={Reqmechanicjumb}/>
            <Route path="/requestmechanic" component={Requestmechanics}/>
            </Switch>
            </div>
            </Router>
        )
    }
}
export default Userhome