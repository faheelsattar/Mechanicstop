import React from 'react'
import './steps.css'
class Steps extends React.Component{
render(){
    return(
        <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="stepimg">
        <img className="actualimages" src="/images/carcrashed.png"/>
        </div>
        <div className="container">
        <h2><strong> 1 </strong></h2>
          <p> So lets suppose it was another bad day, your car vehicle into some sort of trouble and
          as worst as it gets you cant even find a mechanic nearby. What do you do now?..
          </p>
        </div>
        </div>
        <div className="carousel-item">
        <div className="stepimg">
        <img className="actualimages" src="/images/phone.png"/>
        </div>
        <div className="container">
          <h2><strong> 2 </strong></h2>
          <p> Well bad things happen and we need to find a smart solution for them.
          You create an account on <strong>MechanicStop</strong> if you dont already have one
          and our geolocation service will help you find a list of mechanic companies in your location.
          </p>
        </div>
        </div>
        <div className="carousel-item">
        <div className="stepimg">
        <img className="actualimages" src="/images/form.png"/>
        </div>
        <div className="container">
          <h2><strong> 3 </strong></h2>
          <p> Fill up the form stating the problem you might think your vehicle ran into and some
          of the other things that stated
          </p>
        </div>
        </div>
        <div className="carousel-item">
        <div className="stepimg">
        <img className="actualimages" src="/images/maps.png"/>
        </div>
        <div className="container">
          <h2><strong> 4 </strong></h2>
          <p>Once you have chosen the mechanic comapany of your choice your location will be displayed 
          to the company immediately and they will respond to you.
           </p>
        </div>
        </div>
        <div className="carousel-item">
        <div className="stepimg">
        <img className="actualimages" src="/images/motorcycle.png"/>
        </div>
        <div className="container">
        <h2><strong> 5 </strong></h2>
        <p>A mechanic will be sent towards you by the company and you can easily track the location of your
        machanic with our geolocation services
         </p>
        </div>
        </div>
        <div className="carousel-item">
        <div className="stepimg">
        <img className="actualimages" src="/images/carservice.png"/>
        </div>
        <div className="container">
        <h2><strong> 6 </strong></h2>
        <p>The mechanic will completely diagnose the problem and suggest you with some alternatives/fixes to 
        choose from. Mechanic will then take time fxing your car depending on the problem.
         </p>
        </div>
        </div>
        <div className="carousel-item">
        <div className="stepimg">
        <img className="actualimages" src="/images/money.png"/>
        </div>
        <div className="container">
        <h2><strong> 7 </strong></h2>
        <p>And finally when all the work is done service cost will be calculated by the company and they'll 
        inform you.
         </p>
         <strong> Its that simple and safe!! </strong>
        </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
        </div>
    )
}
}
export default Steps 
