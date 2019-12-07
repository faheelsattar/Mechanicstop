import React from 'react'
import './navbar.css'

class Navbar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <nav className="navbar navbar-expand-sm navb1">
                <a className="navbar-brand navbbr1" href="index.html">
                <img className="concept1" src="./images/nut2.png"/>
                MechanicStop
                </a>
                <button className="navbar-toggler navb1tg" data-toggle="collapse" data-target="#collapsenavbar-collapse">
                    <img src="/images/hamburger.png"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsenavbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav1link" href="">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav1link" href="">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav1link" href="">Login</a>
                        </li>
                    </ul>
                </div>
             </nav>

        )
    }
}
export default Navbar