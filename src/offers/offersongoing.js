import React from 'react'
import './offersongoing.css'
class Offersongoing extends React.Component{
    render(){
        return(
            <div  className="offersongoing">
            <div className="offerholder">
                <div className="offer">
                    <div className="offerdetails">
                        <div className="offername">
                            <h4>Azadi offer </h4>
                        </div>
                        <div className="offerdescription">
                            <strong>Description:</strong>
                            <p> this is a special azadi offer mainly for maintenace and fixing of smaller parts of the vehicle  </p>
                        </div>
                    </div>
                </div>
                <div className="offerfooter">
                    <div className="offerfootercontent">
                        <div className="details">
                        <div>
                            <img src="/images/coin.png" />
                            <strong>200 $</strong>
                        </div>
                        <div>
                            <img src="/images/discount.png" />
                            <strong>50 %</strong>
                        </div>
                        </div>
                        <div className="offerdate">
                            <p className="offerenddate">12/3/2020 </p>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        )
    }
}
export default Offersongoing