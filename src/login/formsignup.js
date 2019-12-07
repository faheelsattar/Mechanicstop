import React from 'react'
import './formsignup.css'
import { request } from 'http';

class Formsignup extends React.Component{
    constructor(props){
        super(props)
        this.state={
                name:props.name,
                user_id: "",
                user_name: "",
                phone_nouser: "",
                user_passcode: "",
                company_id: "",
                company_name: "",
                latitude: "",
                longitude: "",
                phone_nocompany: "",
                status: "",
                company_passcode:""
        }
        this.handleData=this.handleData.bind(this)
    }
    handleData=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    registerUser= (event)=>{
        event.preventDefault()
        const headers= new Headers()   
        headers.append('Content-Type','application/json')
        headers.append('Origin', 'http://localhost:4000');
        const options={
            mode:'cors',
            method:'POST',
            headers:headers,
            body:JSON.stringify({
                email:this.state.user_id,
                name:this.state.user_name,
                phoneno:this.state.phone_nouser,
                password:this.state.user_passcode
            })
        }
        console.log(this.state.user_name)
        fetch('http://localhost:4000/auth/register/user',options)
        .then(response => console.log(response.status))
        .then(response => console.log(response.status))
        .catch(error => console.log('Authorization failed : ' + error.message))
    }   

    registerCompany=(event)=>{
        event.preventDefault()
        const headers= new Headers()   
        headers.append('Content-Type','application/json')
        headers.append('Origin', 'http://localhost:4000');
        const options={
            mode:'cors',
            method:'POST',
            headers:headers,
            body:JSON.stringify({
                email:this.state.company_id,
                name:this.state.company_name,
                latitude:this.state.latitude,
                longitude:this.state.longitude,
                phoneno:this.state.phone_nocompany,
                status:this.state.status,
                password:this.state.company_passcode
            })
        }
        fetch('http://localhost:4000/auth/register/mechaniccompany',options)
        .then(response => console.log(response.status))
        .then(response => console.log(response.status))
        .catch(error => console.log('Authorization failed : ' + error.message))
    }
    render(){
        return(
            <div>
                {
                    this.state.name =='user'?
                    <form className="md-form signupform">
                        <input className="form-control inpuser" name="user_id" onChange={this.handleData} placeholder="Email" type="email"/>
                        <input className="form-control inpuser" name="user_name" onChange={this.handleData} placeholder="Full name" type="text"/>
                        <input className="form-control inpuser" name="phone_nouser" onChange={this.handleData} placeholder="Phone no" type="number"/>
                        <input className="form-control inpuser" name="user_passcode" onChange={this.handleData} placeholder="Password" type="password"/>
                        <button className="form-control signupuserbtn btn-primary " onClick={this.registerUser}>Sign up</button>
                    </form>
                    :
                    <form className="md-form signupform">
                        <input className="form-control inpcomp" name="company_id" onChange={this.handleData} placeholder="Email" type="email"/>
                        <input className="form-control inpcomp" name="company_name" onChange={this.handleData} placeholder="Company name" type="text"/>
                        <input className="form-control inpcomp" name="latitude" onChange={this.handleData} placeholder="Latitude" type="number"/>
                        <input className="form-control inpcomp" name="longitude" onChange={this.handleData} placeholder="Longitude" type="number"/>
                        <input className="form-control inpcomp" name="phone_nocompany" onChange={this.handleData} placeholder="Phone no" type="number"/>
                        <input className="form-control inpcomp" name="status" onChange={this.handleData} placeholder="status" type="number"/>
                        <input className="form-control inpcomp" name="company_passcode" onChange={this.handleData} placeholder="Password" type="password"/>
                        <button className="form-control signupcompanybtn btn-primary"onClick={this.registerCompany}>Sign up</button>
                    {console.log(this.state.company)}
                    </form>
                    
                }
            </div>
        )
    }
}
export default Formsignup 