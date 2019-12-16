import React from 'react'
import './companysteps.css'

class Companysteps extends React.Component{
    render(){
        return(
        <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner companycarousel">
            <div className="carousel-item companycarousel-item active">
            <img src="/images/companyimg2.png"/>
            <div className="container">
                <p className="companycarouseltext">Establish your mechanic business today and manage however you want it. Our system is pretty dynamic </p>
            </div>
            </div>
            <div className="carousel-item companycarousel-item">
            <img src="/images/companyimgmechanic.png"/>
            <div className="container">
                <p className="companycarouseltext"> Register your mechanics and help them assit your business model to grow </p>
            </div>
            </div>
            <div className="carousel-item companycarousel-item">
            <img src="/images/companyimgmaps2.png"/>
            <div className="container">
                <p className="companycarouseltext" > We use Mapbox as our gelocation services which provide dynmic locations to help you accuratley track your cutomers </p>
            </div>
            </div>
            <div className="carousel-item companycarousel-item">
            <img src="/images/companyimgforms.png"/>
            <div className="container">
                <p className="companycarouseltext"> You can create special offers at anytime which can be availed by the cutomers</p>
            </div>
            </div>
            <div className="carousel-item companycarousel-item">
            <img src="/images/companyimgsecurity.png"/>
            <div className="container">
                <p  className="companycarouseltext">Your data is important to us and we make sure its secured with the best practices needed</p>
            </div>
            </div>
        </div>
      </div>
        )
    }
}

export default Companysteps