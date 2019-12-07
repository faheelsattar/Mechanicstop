import React from 'react'
import './requestmechanicform.css'

class Requestmechanicform extends React.Component{
    render(){
        return(
        <div className="container requestmechanicmain">
            <div className="reqholder row">
                <div className="sidecompany col-md-3">
                <div className="reqhead">
                <h1 >Request a Mechanic </h1>
                </div>
                </div>
                <div className="reqform col-md-9">
                <div className="formdiv">
                    <form className="">
                            <input className="form-control vehicle" name="vehicle" onChange={this.handleData} placeholder="vehicle name" type="text"/>
                            <input className="form-control vehicletype" name="vehicletype" onChange={this.handleData} type="text" placeholder="vehicle type"/>
                            <input className="form-control model" name="model" onChange={this.handleData} placeholder="model" type="text"/>
                            <input className="form-control description" name="description" onChange={this.handleData} placeholder="description" type="text"/>
                            <button className="form-control reqbtn btn-primary">
                            Log in
                            </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Requestmechanicform
