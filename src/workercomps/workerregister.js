import React from 'react'
import './workerregister.css'
import Formsignup from '../login/formsignup'
class Workerregister extends React.Component{
    constructor(){
        super()
        this.state={
            load:false
        }
        this.loadForm=this.loadForm.bind(this)
    }

    loadForm=(event)=>{
        event.preventDefault()
        this.setState({
            load:!this.state.load
        })
    }
    render(){
        return(
            <div style={{height:'100vh'}}>
            <div style={{textAlign:'center'}}><h1>Register Worker</h1></div>
            <div className="container row">
            <div className="col-md-6 workersignup">
                <a href="" onClick={this.loadForm} className="workersignupbtn">Worker Register</a>
                {
                    this.state.load==true ? 
                    <div className="workersignupform">
                        <form className="md-form signupform">
                        <input className="form-control inpwork" name="workerphone" placeholder="03-..." type="text"/>
                        <input className="form-control inpwork" name="name" placeholder="Worker name" type="text"/>
                        <input className="form-control inpwork" name="passcode" placeholder="password" type="number"/>
                        <button className="form-control signupworkerbtn btn btn-primary">Register</button>
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