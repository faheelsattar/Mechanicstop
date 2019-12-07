import React from 'react'
import Header from './header'
import Cover from "./cover"
import Cards from './cards'
import Step from './steps'
import Services from './services'
import Reviews from './reviews'
import "./home.css"
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <Header/>
                <Cards/>
                <div className="cover">
                    <Cover/>
                </div>
                <div>
                    <div className="container">
                    </div>
                    <Step/>
                </div>
                <Services/>
                <Reviews/>
            </div>
        )
    }
}
export default Home