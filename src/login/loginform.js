import React from 'react'
import './loginform.css'
import Formlogin from './formlogin'
import Formsignup from './formsignup'
class Loginform extends React.Component{
    constructor(){
        super()
        this.state={
            classname:'',
            login:true,
        }
        this.handleLogin=this.handleLogin.bind(this)
        this.handleLoginUp=this.handleLoginUp.bind(this)
        this.handleSignup=this.handleSignup.bind(this)
    }
    handleLogin=(event)=>{
        event.preventDefault()
        this.setState({
            classname:event.target.className
        })
    }

    handleLoginUp=(event)=>{
        event.preventDefault()
        this.setState({
            login:true
        })
    }
    handleSignup=(event)=>{
        event.preventDefault()
        this.setState({
            login:false
        })
    }
    render(){
        return(
            <div className="col-md-6 lg">
                <div className="loginformholder">
                    <div className="loginheading">
                     {this.state.login? <h1>Log in</h1>:<h1>Sign up</h1>}
                    </div>
                    {
                        this.state.login ?
                        <div className="userlogin">
                            <a href="" className="userloginbtn" onClick={this.handleLogin}> User Login </a>
                            {
                                this.state.classname=="userloginbtn" ? <div className="userloginform"><Formlogin name="user"/></div>:
                                <div className="userloginform"></div>
                            }
                        </div>
                        :
                        <div className="usersignup">
                            <a href="" className="usersignupbtn" onClick={this.handleLogin}> User Signup </a>
                            {
                                this.state.classname=="usersignupbtn" ? <div className="usersignupform"><Formsignup name="user"/></div>:
                                <div className="usersignupform"></div>
                            }
                        </div>
                    }
                    {
                        this.state.login ?
                        <div className="companylogin">
                            <a href="" className="companyloginbtn" onClick={this.handleLogin}> Company Login </a>
                            {
                                this.state.classname=="companyloginbtn" ? <div className="companyloginform"><Formlogin name="company" /></div>:
                                <div className="companyloginform"></div>
                            }
                        </div>
                        :
                         <div className="companysignup">
                            <a href="" className="companysignupbtn" onClick={this.handleLogin}> Company Signup </a>
                            {
                                this.state.classname=="companysignupbtn" ? <div className="companysignupform"><Formsignup name="company"/></div>:
                                <div className="companysignupform"></div>
                            }
                        </div>
                    }
                    {
                        this.state.login ?
                        <div className="workerlogin">
                            <a href="" className="workerloginbtn" onClick={this.handleLogin}> Worker Login </a>
                            {
                                this.state.classname=="workerloginbtn" ? <div className="workerloginform"><Formlogin name="worker"/></div>:
                                <div className="workerloginform"></div>
                            }
                        </div>
                        :
                        <div>
                        </div>
                    }
                    {
                        this.state.login ?
                        <div className="signup">
                            <p>Not a member? <a href="" onClick={this.handleSignup} > Sign up</a></p>
                        </div>
                        :
                        <div className="login">
                           <p>Already have an account? <a href="" onClick={this.handleLoginUp} >Log in</a></p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Loginform