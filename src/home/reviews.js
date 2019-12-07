import React from 'react'
import './reviews.css'
class Reviews extends React.Component{
    render(){
        return(
            <div className="reviews">
                <div className="container">
                    <h1 className="reviewheading"><strong>Our Customers Experience</strong></h1>
                    <div className="reviewcontainer">
                    <div className="reviewbody">
                        <div className="review">
                        <div>
                            <div className="username">
                                <h3> Faheel Sattar </h3>
                                <div className="color">
                                </div>
                            </div>
                            <div className="companyname">
                                <strong>Company name:</strong> Ali Mechanics
                            </div>
                            <div className="reviewtext">
                                <strong>Review:</strong> The service was great. The mechanic guided me through all the steps
                                and fixed my car with in a couple of minutes. Definitely will use again.
                            </div>
                        </div>
                        <div className="reviewdate">
                            <div><strong>September </strong></div>
                        </div>
                        </div>         
                    </div>
                     <div className="reviewbody">
                        <div className="review">
                        <div>
                            <div className="username">
                                <h3> Shanzae Zeeshan </h3>
                                <div className="color">
                                </div>
                            </div>
                            <div className="companyname">
                            <strong>Company name:</strong> Triple Tyres
                            </div>
                            <div className="reviewtext">
                                <strong>Review:</strong> The service was great. The mechanic guided me through all the steps
                                and fixed my car with in a couple of minutes. Definitely will use again.
                            </div>
                        </div>
                        <div className="date">
                        <div><strong>November</strong></div>
                        </div>
                        </div>         
                    </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews