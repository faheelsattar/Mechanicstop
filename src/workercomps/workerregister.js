import React from 'react'
import './workerregister.css'
class Workerregister extends React.Component{
    constructor(){
        super()
        this.state={
            load:false,
            workerphone:"",
            name:"",
            passcode:"",
            notvalidfields:[],
        }
        this.loadForm=this.loadForm.bind(this)
        this.handleData=this.handleData.bind(this)
        this.registerWorker=this.registerWorker.bind(this)
    }

    loadForm=(event)=>{
        event.preventDefault()
        this.setState({
            load:!this.state.load
        })
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

    registerWorker=async(event)=>{
        if(this.checkValidation() && this.state.workerphone!='' && this.state.name!='' && this.state.passcode!=''){
        event.preventDefault()
        const headers= new Headers()   
        headers.append('Content-Type','application/json')
        headers.append('Origin', 'http://localhost:4000');
        const options={
            mode:'cors',
            method:'POST',
            headers:headers,
            body:JSON.stringify({
                phoneno:this.state.workerphone,
                name:this.state.name,
                email:localStorage.getItem("Host"),
                password:this.state.passcode
            })
        }
        try{
        const res= await fetch('http://localhost:4000/mechanic/addworkers',options)
        console.log(res.status)
        if(res.status==200){
            this.setState({
                reqstatus:"Worker is registered succesfully",
                resstatus:200
            }) 
        }else if(res.status==400){
            this.setState({
                reqstatus:"Worker already exists",
                resstatus:400
            }) 
        }
    }catch(err){
        console.log(err)
    }
        }
    }
    render(){
        return(
            <div style={{height:'100vh'}}>
            <div style={{textAlign:'center'}}><h1>Register Worker</h1></div>
            <div className="container row">
            {
                this.state.resstatus==400||this.state.resstatus==200 ? 
                <div className={this.state.resstatus==400? "workerregalert alert alert-danger" :"workerregalert alert alert-success"} role="alert">
                {`${this.state.reqstatus}`}
                </div> 
                :
                <div></div>
            }
            <div className="col-md-6 workersignup">
                <a href="" onClick={this.loadForm} className="workersignupbtn">Worker Register</a>
                {
                    this.state.load==true ? 
                    <div className="workersignupform">
                        <form className="md-form signupform">
                        <input className="form-control inpwork" onChange={this.handleData} name="workerphone" placeholder="03-..." type="number" required/>
                        <input className="form-control inpwork" onChange={this.handleData} name="name" placeholder="Worker name" type="text" required/>
                        <input className="form-control inpwork" onChange={this.handleData} name="passcode" placeholder="password" type="password" minLength="6" maxLength="20" required/>
                        <button onClick={this.registerWorker} className="form-control signupworkerbtn btn btn-primary">Register</button>
                        </form>
                    </div>
                    :
                    <div> </div>
                }
            </div>
            </div>
            </div>
        )
    }
}
export default Workerregister