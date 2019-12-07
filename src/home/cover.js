import React from 'react'

class Cover extends React.Component{
    render(){
        return(
            <div className="covercontent row">
            <div className="col=md-1"></div>
            <div className="col-md-3 coverheadholder">
            <h1 className="coverheading"> So how does it all happen under one hood? </h1>
            </div>
            <div className="col-md-8 coverimgholder">
            <img className="steps" src="./images/logodesign2.png"/>
            </div>
            </div>
        )
    }
}

export default Cover