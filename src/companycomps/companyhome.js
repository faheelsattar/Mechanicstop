import React from 'react'
import './companyhome.css'
import Navbar from '../sharedcomps/navbar'
import Companymain from './companymain' 
import {BrowserRouter as Router, Switch,Route, link} from 'react-router-dom'
import Workermain from '../workercomps/workermain'

class Companyhome extends React.Component{ 
    constructor(){
        super()
    }
    render(){
        return(
            <Router>
                <div className="companyhome">
                <Navbar/>
                <Switch>
                <Route path="/" exact component={Companymain}/>
                <Route path="/workers" component={Workermain}/>
                </Switch>
                </div>
            </Router>
        )
    }
}

export default Companyhome