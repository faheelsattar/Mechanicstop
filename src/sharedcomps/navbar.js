import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Notifications from '../usercomps/notifications'
import Notificationscompany from '../companycomps/notifications'
class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            noticlick:false,
            compo:localStorage.getItem('Dealingwith')
        }
    }
    handleNotificationToggle=(event)=>{
        event.preventDefault()
        this.setState({
            noticlick:!this.state.noticlick
        })
    }
    componentDidMount(){
        this.getNotifications()
    }
        
    getNotifications=async()=>{
        const host=localStorage.getItem('Host')
        console.log(host)
        try{
            const res = await fetch(`http://localhost:4000/requests/hostnotification?hostid=${host}`)
            const data = await res.json()
            console.log(data)
            this.setState({
                notification:data.Data
            })
        }catch(err){
            console.log(err)
        }
    }
    render(){   
        return(
        <div className="landing-wrapper">
        <nav className={this.state.compo=='user'?"navbar navbar-expand-sm navb2":"navbar fixed-top workernavbar navbar-expand-md navb2"}>
            <Link to="/" className="navbar-brand navbbr2" href="index.html">
            <img className="concept1" src="./images/nut.svg"/>
            MechanicStop
            </Link>
            <button className="navbar-toggler navb2tg" data-toggle="collapse" data-target="#collapsenavbar-collapse">
                <img src="/images/hamburger.png"/>
            </button>
            {   
                this.state.compo =='user' || this.state.compo =='company'
                ?      
            <div className="collapse navbar-collapse clpse2" id="collapsenavbar-collapse">
                {
                    this.state.compo=='user'
                    ?
                <ul className="navbar-nav navbnav2 ml-auto">  
                    <li className="nav-item navitem2 n">
                        <a onClick={this.handleNotificationToggle} className="nav-link nav2link" href="">Notifications</a>
                        {this.state.noticlick ? <Notifications  data={this.state.notification}/> : <div></div> } 
                    </li>
                        
                    <li className="nav-item navitem2">
                        <Link to="/History" className="nav-link nav2link" href="">History</Link>
                    </li>
                        
                    <li className="nav-item navitem2">
                        <Link to="/Profile" className="nav-link nav2link" href="">Profile</Link>
                    </li>
                </ul>
                :
                <ul className="navbar-nav navbnav2 ml-auto n">  
                    <li className="nav-item navitem2">
                        <a onClick={this.handleNotificationToggle} className="nav-link nav2link" href="">Notifications</a>
                        {this.state.noticlick ? <Notificationscompany data={this.state.notification}/> : <div></div> } 
                    </li>
                        
                    <li className="nav-item navitem2">
                        <Link to="/Workers" className="nav-link nav2link" href="">Workers</Link>
                    </li>

                    <li className="nav-item navitem2">
                        <Link to="/Offers" className="nav-link nav2link" href="">Offers</Link>
                    </li>

                    <li className="nav-item navitem2">
                        <Link to="/History" className="nav-link nav2link" href="">History</Link>
                    </li>

                    <li className="nav-item navitem2">
                        <Link to="/Profile" className="nav-link nav2link" href="">Profile</Link>
                    </li>
                </ul>
                }
            </div>:
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
        }
         </nav>
         </div>
        )
    }
}
export default Navbar