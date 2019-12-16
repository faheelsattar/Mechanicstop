import React from 'react'
import './formlogin.css'
class Formlogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name,
            email: "",
            phoneno: "",
            passcode: "",
        }
        this.handleData=this.handleData.bind(this)
    }

    loginUser=async(event)=>{
        event.preventDefault()
        console.log(this.state.name)
        const headers= new Headers()   
        headers.append('Content-Type','application/json')
        headers.append('Origin', 'http://localhost:4000');
        const options={
            mode:'cors',
            method:'POST',
            headers:headers,
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.passcode
            })
        }
        try{
        const res= await fetch('http://localhost:4000/auth/login/user',options)
        const data= await res.json()
        localStorage.setItem('Token',data.Token)
        localStorage.setItem('Dealingwith',data.Dealingwith)
        console.log(data.Token)
        }catch(err){
            console.log(err)
        }
    }

    loginCompany=async(event)=>{
        event.preventDefault()
        console.log(this.state.name)
        const headers= new Headers()   
        headers.append('Content-Type','application/json')
        headers.append('Origin', 'http://localhost:4000');
        const options={
            mode:'cors',
            method:'POST',
            headers:headers,
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.passcode
            })
        }
        try{
        const res= await fetch('http://localhost:4000/auth/login/company',options)
        const data= await res.json()
        localStorage.setItem('Token',data.Token)
        localStorage.setItem('Dealingwith',data.Dealingwith)
        console.log(data.Token)
        }catch(err){
            console.log(err)
        }
    }

    loginWorker=async(event)=>{
        event.preventDefault()
        console.log(this.state.name)
        const headers= new Headers()   
        headers.append('Content-Type','application/json')
        headers.append('Origin', 'http://localhost:4000');
        const options={
            mode:'cors',
            method:'POST',
            headers:headers,
            body:JSON.stringify({
                workersphone:this.state.phoneno,
                password:this.state.passcode
            })
        }
        try{
        const res= await fetch('http://localhost:4000/auth/login/worker',options)
        const data= await res.json()
        localStorage.setItem('Token',data.Token)
        localStorage.setItem('Dealingwith',data.Dealingwith)
        console.log(data.Token)
        }catch(err){
            console.log(err)
        }
    }

    handleData=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div>
            {
                this.state.name=="user" || this.state.name=="company"
                ?  
                <form className="md-form loginform">
                    <input className="form-control email" name="email" onChange={this.handleData} placeholder="username" type="email"/>
                    <input className="form-control passcode" name="passcode" onChange={this.handleData} placeholder="password"/>
                    <button className={"form-control loginbtn btn-primary"} 
                    onClick={this.state.name=="user" ? this.loginUser : this.loginCompany}>
                    Log in
                    </button>
                </form>
                :
                <form className="md-form loginform">
                    <input className="form-control phoneno" name="phoneno"  onChange={this.handleData} placeholder="username" type="number"/>
                    <input className="form-control passcode" name="passcode" onChange={this.handleData} placeholder="password"/>
                    <button className="form-control loginbtn btn-primary" onClick={this.loginWorker}>Log in</button>
                </form>

            }
            </div>
        )
    }
}
export default Formlogin