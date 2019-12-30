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
            notvalidfields:[],
            validity:false
        }
        this.handleData=this.handleData.bind(this)
    }
    remove=(array, element)=> {
        return array.filter(el => el !== element);
    }
    handleData=(event)=>{
        event.preventDefault()
        if(!event.target.checkValidity()){
            console.log(event.target.name)
            this.state.notvalidfields.push(event.target.name)
            console.log(this.state.notvalidfields)
        }else{
            console.log(this.remove(this.state.notvalidfields,event.target.name))
            this.setState({
                [event.target.name]:event.target.value,
                notvalidfields:this.remove(this.state.notvalidfields,event.target.name)
            })
        }
    }
    checkValidation=()=>{
        if(this.state.notvalidfields.length==0){
            return true
        }else{
            return false;
        }
    }
    loginUser=async(event)=>{
        if(this.checkValidation() && this.state.email !='' && this.state.passcode !=''){
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
        if(res.status==400){
            this.setState({
                reqstatus:"Email or password is wrong",
                validity:true
            })        
        }
        else if(res.status==200){
        const data= await res.json()
        localStorage.setItem('Token',data.Token)
        localStorage.setItem('Dealingwith',data.Dealingwith)
        localStorage.setItem('Host', data.Host)
        console.log(data.Token)
        this.setState({
            validity:false
        })
    }
        }catch(err){
            console.log(err)
        }    
    }
    }

    loginCompany=async(event)=>{
        if(this.checkValidation() && this.state.email !='' && this.state.passcode !=''){
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
        if(res.status==400){
            this.setState({
                reqstatus:"Email or password is wrong",
                validity:true
            })        
        }
        else if(res.status==200){
        const data= await res.json()
        localStorage.setItem('Token',data.Token)
        localStorage.setItem('Dealingwith',data.Dealingwith)
        localStorage.setItem('Host', data.Host)
        console.log(data.Token)
        this.setState({
            validity:false
        })
    }
        }catch(err){
            console.log(err)
        }
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
        localStorage.setItem('Host', data.Host)
        console.log(data.Token)
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return(
            <div>
            {
                !this.state.validity ? <div></div>
                :
                <div className="regalert alert alert-danger" role="alert">
                {`${this.state.reqstatus}`}
                </div> 
            }
            {
                this.state.name=="user" || this.state.name=="company"
                ?  
                <form className="md-form loginform">
                    <input className="form-control email" name="email" onChange={this.handleData} placeholder="username" type="email" required/>
                    <input className="form-control passcode" name="passcode" onChange={this.handleData} placeholder="password" minLength="6" maxLength="20" type="password" required/>
                    <button className={"form-control loginbtn btn-primary"} 
                    onClick={this.state.name=="user" ? this.loginUser : this.loginCompany}>
                    Log in
                    </button>
                </form>
                :
                <form className="md-form loginform">
                    <input className="form-control phoneno" name="phoneno"  onChange={this.handleData} placeholder="username" type="number" required/>
                    <input className="form-control passcode" name="passcode" onChange={this.handleData} placeholder="password" minLength="6" maxLength="20" type="password" required/>
                    <button className="form-control loginbtn btn-primary" onClick={this.loginWorker}>Log in</button>
                </form>

            }
            </div>
        )
    }
}
export default Formlogin