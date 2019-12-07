import React from 'react'
import './login.css'
import Sidecover from './sidecover'
import Loginform from './loginform'
class Login extends React.Component{
    render(){
        return(
            <div className="row loginsize">
                <Sidecover/>
                <Loginform/>
            </div>
        )
    }
}
export default Login 