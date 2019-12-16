import React from 'react'
import './requestmechanicform.css'

class Requestmechanicform extends React.Component{
    constructor(){
        super()
        this.state={
            vehicle:'',
            vehicletype:'',
            model:'',
            description:''
        }
    }
    handleData=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    getUserData=async(event)=>{
        event.preventDefault()
        const headers= new Headers()   
        headers.append('Content-Type','application/json')
        headers.append('Origin', 'http://localhost:4000')
        headers.append('auth-token', localStorage.getItem('Token'))

        const options={
            mode:'cors',
            method:'POST',
            headers:headers,
            body:JSON.stringify({
                userid:this.state.user_id,
                vehicle:this.state.vehicletype,
                vehiclename:this.state.vehicle,
                model:this.state.model,
                description:this.state.description,
                companyid:this.props.companyid,
                latitude:this.props.latitude,
                longitude:this.props.longitude,
            })
        }
        try{
            const res = await fetch(`http://localhost:4000/user/mechanicrequest`,options)
            if(res.status==200){
                console.log("your request has been sent succesfully")
            }
        }catch(err){
            console.log(err)
        }
    }
    render(){
        
        return(
        
        <div className="container requestmechanicmain">
            <div className="reqholder row">
                <div className="sidecompany col-md-3">
                <div className="reqhead">
                    <h1>Request a Mechanic</h1>
                </div>
                </div>
                <div className="reqform col-md-9">
                    <form className="">
                    <div className="formdiv">
                        <input className="form-control vehicle" name="vehicle" 
                        onChange={this.handleData} placeholder="vehicle name" type="text"/>
                        <input className="form-control vehicletype" name="vehicletype" 
                        onChange={this.handleData} type="text" placeholder="vehicle type"/>
                        <input className="form-control model" name="model" 
                        onChange={this.handleData} placeholder="model" type="text"/>
                        <textarea rows="1" className="form-control description" name="description" 
                        onChange={this.handleData} placeholder="description" type="text"></textarea>
                        <button className="form-control reqbtn btn-primary" onClick={this.getUserData}>
                        Log in
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Requestmechanicform
