import React from 'react'
import './notifications.css'

class Notification extends React.Component{
    constructor(props){
        super(props)
       // this.state={
         //   noticlick:props.noticlick
       // }
    } 
    // componentDidUpdate(prevProps) {
     //  if(prevProps.noticlick!==this.props.noticlick){
      //   this.setState({noticlick:this.props.noticlick});
      // }
    // }
    render(){
        return(
            <div className="notificationholder">
            <div className="uperarrow"></div>
            <div className="notification">
            <div className="notibody">
                <div className="noti">
                <div>
                    <div className="noticompany">
                    <div className="toolimg">
                    <img src="/images/tools.png"/>
                    </div>
                    <h5> Mechanic Company </h5>
                    </div>
                    <div className="reviewtext">
                        <label>Status:</label> <i>Pending</i>
                    </div>
                </div>
                <div className="notidate">
                    <div><strong>11/10/19</strong></div>
                </div>
                </div>         
            </div>
            <div className="notibody">
                <div className="noti">
                <div>
                    <div className="noticompany">
                    <div className="toolimg">
                    <img src="/images/tools.png"/>
                    </div>
                    <h5> Mechanic Company </h5>
                    </div>
                    <div className="reviewtext">
                        <label>Status:</label> <i>Pending</i>
                    </div>
                </div>
                <div className="notidate">
                    <div><strong>11/10/19</strong></div>
                </div>
                </div>         
            </div>
            </div>
            </div>
        )
    }
}
export default Notification