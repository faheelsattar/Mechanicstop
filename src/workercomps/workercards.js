import React from 'react'
import './workercards.css'
class Workercards extends React.Component{
    render(){
        return(
            <div className="workercardscontainer container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="worker-card workercard1">
                                <div className="worker-card-text">
                                    <strong> Workers </strong>
                                </div>
                                <div className="worker-card-image">
                                    <img src="./images/companyimgworker.png"/>
                                </div>
                            </div>  
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="worker-card workercard2">
                                <div className="worker-card-text">
                                    <strong>Used Most </strong>
                                    <p>Saleem Khan </p>
                                </div>
                                <div className="worker-card-image">
                                    <img src="./images/companyimgworker.png"/>
                                </div>
                            </div>  
                        </div>
                    </div>
            </div>
        )
    }
}

export default Workercards