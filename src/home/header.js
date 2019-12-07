import React from 'react'
import './header.css'
import Navbar from "./navbar"
import Logo from './logo'
class Header extends React.Component{
    render(){
        return(
            <header className="head">
                <Logo/>
                <Navbar/>
            </header>
        )
    }
}

export default Header