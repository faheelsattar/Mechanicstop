import React from 'react'
import './companymain.css'
import Companysteps from './companysteps'
import Companycards from './companycards'
import Companycharts from './companycharts'
import Companyreviews from './companyreviews'
class Companymain extends React.Component{
    render(){
        return(
            <div className="companycompsholder">
            <div className="container-fluid companymain">
                <div className="row">
                <div className="col-md-6">
                <div className="companyheadholder">
                    <h1 className="companyheading"> 
                    Build, Manage, Obtain
                    </h1>
                    <h3 className="companyheading"> 
                    We care about your business
                    </h3>
                 </div>
                </div>
                <div className="col-md-6">
                <Companysteps/>
                </div>
                </div>
            </div>
            <div className="companycontent">
            <Companycards/>
            <Companycharts/>
            <Companyreviews/>
            </div>
            </div>

        )
    }
}
export default Companymain