import React from 'react'
import './companyhome.css'
import Navbar from '../sharedcomps/navbar'
import Companymain from './companymain' 
import Workermain from '../workercomps/workermain'
import Offersmain from '../offers/offersmain'
import Showallnotifications from './showallnotifications'
import Companyrequests from './companyrequests'
import {BrowserRouter as Router, Switch,Route, link} from 'react-router-dom'


class Companyhome extends React.Component{ 
    constructor(){
        super()
    }
    render(){
        const NoMatchPage = () => {
            return (
              <h3 style={{marginTop:'120px'}}>404 - Not found</h3>
            );
          };
        return(
            <Router>
                <div className="companyhome">
                <Navbar/>
                <Switch>
                <Route path="/" exact component={Companymain}/>
                <Route path="/Workers" component={Workermain}/>
                <Route path="/Offers" component={Offersmain}/>
                <Route path="/Notifications" component={Showallnotifications}/>
                <Route path="/Requests/:key" component={Companyrequests}/>
                <Route component={NoMatchPage}/>
                </Switch>
                </div>
            </Router>
        )
    }
}

export default Companyhome