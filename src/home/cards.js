import React from 'react'
import data from './cardsdata'
import "./cards.css"
class Cards extends React.Component{
    render(){
        const card=data.map(index=>
            <div className="col-md-3">
                <div className="card1">
                    <div className="cardimagecontainer">
                     <img className="homecardfirst card-img-top" src={index.url} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title"><strong>{index.title} </strong></h2>
                        <p className="card-text">{index.text} </p>
                    </div>
                </div>
            </div>
         )
        return(
            <div className="row row1">
                {card}
            </div>
        )
    }
}
export default Cards