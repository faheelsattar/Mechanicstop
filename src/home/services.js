import React from 'react'
import './services.css'

class Services extends React.Component{
    render(){
        return(
            <div className="service">
            <div className="container">
            <h1 className="serviceheading"><strong> Our Services </strong></h1>
            </div>
            <div className="row row2 services">
            <div className="col-md-3 car">
            <div className="card card2 ">
            <div className="card card2internal">
                <img className="card-img-top" src="./images/carmechanic.jpg"/>
                <div className="card-body">
                    <p className="card-text">
                        <strong>
                            <ul>
                                <li> Tuning & Maintenance </li> 
                                <li> Electrical Scanning </li>
                                <li> Diagnosis</li>
                                <li> Engine Overhaul </li> 
                                <li> Oil Replacement </li>
                                <li> Electric Work </li>
                                <li> Parts Replacement </li>
                            </ul>    
                        </strong>
                    </p>
                    <hr/>
                </div>
            </div>
                <img className="card-img-top" src="./images/carimage.jpg"/>
                <div className="card-body">
                    <h1 className="card-title"> <strong>Car </strong> </h1>
                </div>
            </div>
             </div>
             <div className="col-md-3 jeep">
             <div className="card card2">
             <div className="card card2internal">
             <img className="card-img-top " src="./images/jeepmechanic.jpg"/>
             <div className="card-body">
                    <p className="card-text">
                    <strong>
                        <ul>
                            <li> Tuning & Maintenance </li> 
                            <li> Electrical Scanning </li>
                            <li> Diagnosis</li>
                            <li> Engine Overhaul </li> 
                            <li> Oil Replacement </li>
                            <li> Electric Work </li>
                            <li> Parts Replacement </li>
                        </ul>    
                    </strong>
                     </p>
                <hr/>
             </div>
             </div>
                 <img className="card-img-top " src="./images/jeepimg.jpg"/>
                 <div className="card-body">
                     <h1 className="card-title"><strong> Jeep  </strong></h1>
                 </div>
             </div>
              </div>
              <div className="col-md-3 bike">
              <div className="card card2">
              <div className="card card2internal">
              <img className="card-img-top" src="./images/bikemechanic.jpg"/>
              <div className="card-body">
                <p className="card-text">
                <strong>
                    <ul>
                        <li> Tuning </li> 
                        <li> Repairing/ Maintenance </li>
                        <li> Battery/ AVR/ Self Work</li>
                        <li>  Engine/ Overhaul /Repairing</li> 
                        <li> New Generator Installation </li>
                    </ul>    
                </strong>
                </p>
                <hr/>
              </div>
             </div>
                  <img className="card-img-top" src="./images/bikeimg.jpg"/>
                  <div className="card-body">
                      <h1 className="card-title"> <strong>Bike  </strong></h1>
                  </div>
              </div>
               </div>
            </div>
            </div>
        )
    }
}
export default Services