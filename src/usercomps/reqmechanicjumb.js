import React from 'react'
import './reqmechanicjumb.css'
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'
import Requestmechanics from './requestmechanics'

class Reqmechanicjumb extends React.Component{
    render(){
        return(
            <div className="container-fluid jumbotron1">
                <div className="md-form formrequest">
                    <Link to="/requestmechanic" className="btn btn-danger reqmechbtn" href="">Request A mechanic</Link>
                    <h5> Your Current Geolocation will be used</h5>
                </div>
            </div>
        )
    }
}
export default Reqmechanicjumb