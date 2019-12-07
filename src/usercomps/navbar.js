import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Notifications from './notifications'
class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            noticlick:false
        }
    }
    handleNotificationToggle=(event)=>{
        event.preventDefault()
        this.setState({
            noticlick:!this.state.noticlick
        })
    }
    render(){   
        return(
            <nav className="navbar navbar-expand-sm navb2">
            <Link to="/" className="navbar-brand navbbr2" href="index.html">
            <img className="concept1" src="./images/nut2.png"/>
            MechanicStop
            </Link>
            <button className="navbar-toggler navb2tg" data-toggle="collapse" data-target="#collapsenavbar-collapse">
                <img src="/images/hamburger.png"/>
            </button>
            <div className="collapse navbar-collapse clpse2" id="collapsenavbar-collapse">
                <ul className="navbar-nav navbnav2 ml-auto">
                    <li className="nav-item navitem2 n">
                        <a onClick={this.handleNotificationToggle} className="nav-link nav2link" href="">Notifications</a>
                       {this.state.noticlick ? <Notifications/> : <div></div> } 
                    </li>
                    <li className="nav-item navitem2">
                    <Link to="/History" className="nav-link nav2link" href="">History</Link>
                    </li>
                    <li className="nav-item navitem2">
                        <Link to="/Profile" className="nav-link nav2link" href="">Profile</Link>
                    </li>
                </ul>
            </div>
         </nav>

        )
    }
}
export default Navbar