import React from 'react'
import './companycards.css'
import data from './companycardsdata'
class Companycards extends React.Component{
    
    render(){
        const companycards=data.map(index=>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="companycard1">
                    <div className="companycard-holder">
                        <div className="align-items-center justify-content-between">
                            <div className="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                    <div className="companycard-content">
                                        <strong>
                                           {index.title}
                                        </strong>
                                        <h2>
                                            {index.text}
                                        </h2>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                    <div className="banner">
                                        <img src={index.url}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return(
            <div className="companycards">
            <div className="container">
                <div className="row">
                    {companycards}
                </div>
            </div>
            </div>
        )
    }
}   

export default Companycards