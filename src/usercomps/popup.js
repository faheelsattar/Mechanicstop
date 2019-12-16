import React from 'react'

class Popup extends React.Component{
    selectCompany=(event)=>{
        this.props.call(event.target.id)
    }
    render(){
    return (
        <div>
        <strong><h3>{this.props.companyname}</h3></strong> 
        <strong>
            Distance: {this.props.distance} m 
        </strong>
        <br/>
        <strong>
            Duration: {Math.ceil(this.props.duration/60)} min
        </strong>
        <br/>
        <strong>
            Address: {this.props.address} 
        </strong>
        <input onClick={this.selectCompany} type="radio" id={this.props.companyid} className="btn btn-primary"/>
        </div>
    )
}
}

export default Popup