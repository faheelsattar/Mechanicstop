import React from 'react';
import './showallnotifications.css'
import moment from 'moment'
import {Link} from 'react-router-dom'

class Showallnotifications extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notification:[]
        }
    }
    specialFormatTime =()=> {
        var now = new Date();
        var year = "" + now.getFullYear();
        var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month }
        var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day }
        var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour }
        var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute }
        var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second }
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    }

      calculateDays=(startDate)=>{
        var endDate = this.specialFormatTime()
        var start_date = moment(startDate, 'YYYY-MM-DD HH:mm:ss')
        var end_date = moment(endDate, 'YYYY-MM-DD HH:mm:ss')
        var duration = moment.duration(end_date.diff(start_date))
        console.log(duration._milliseconds/(1000*60*60))
        var days = ''
        if(duration._milliseconds/(1000*60*60)>24){
            days=`${Math.floor(duration.asDays())} days`
        }else if(duration._milliseconds/(1000*60*60)<24){
            if(duration._milliseconds/(1000*60)<60){
                days=`${Math.floor(duration.asMinutes())} min`
            }else{
            days=`${Math.floor(duration.asHours())} hr`
            }
        }else if(duration._milliseconds/(1000*60*60)>168){
            days= `${Math.floor(duration.asWeeks())} week`
        }else if(duration._milliseconds/(1000*60*60)>730.001){
            days=`${Math.floor(duration.asMonths())} mnth`
        }else if(duration._milliseconds/(1000*60*60)>8760){
            days= `${Math.floor(duration.asYears())} yr`
        }

        return days
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
            console.log(data.Data)
            this.setState({
                notification:data.Data
            })
        }catch(err){
            console.log(err)
        }
    }
    specialFormatTime =()=> {
        var now = new Date();
        var year = "" + now.getFullYear();
        var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month }
        var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day }
        var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour }
        var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute }
        var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second }
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    }

      calculateDays=(startDate)=>{
        var endDate = this.specialFormatTime()
        var start_date = moment(startDate, 'YYYY-MM-DD HH:mm:ss')
        var end_date = moment(endDate, 'YYYY-MM-DD HH:mm:ss')
        var duration = moment.duration(end_date.diff(start_date))
        console.log(duration._milliseconds/(1000*60*60))
        var days = ''
        if(duration._milliseconds/(1000*60*60)>24){
            days=`${Math.floor(duration.asDays())} days`
        }else if(duration._milliseconds/(1000*60*60)<24){
            if(duration._milliseconds/(1000*60)<60){
                days=`${Math.floor(duration.asMinutes())} min`
            }else{
            days=`${Math.floor(duration.asHours())} hr`
            }
        }else if(duration._milliseconds/(1000*60*60)>168){
            days= `${Math.floor(duration.asWeeks())} week`
        }else if(duration._milliseconds/(1000*60*60)>730.001){
            days=`${Math.floor(duration.asMonths())} mnth`
        }else if(duration._milliseconds/(1000*60*60)>8760){
            days= `${Math.floor(duration.asYears())} yr`
        }

        return days
    }
    render(){
        const notifications = this.state.notification.map(data=>
            <Link key={data.request_ID}  to={`/Requests/${data.request_ID}`} style={{textDecoration:'none'}}>
            <div className="allnotificationbody">
            <div className="allnotificationimagesholder">
                    <div className="companytoolimg">
                        <img src="/images/tools.png"/>
                    </div>
                    <p style={{margin:'0'}}> Customer</p>
                    </div>
                    <div className="allnotificationfooter">
                        <div className="allnotificationfooterstatus">
                            <label>Status:</label> <i>{data.status==null ? "pending" : data.status} </i>
                        </div>
                        <div className="allnotificationfooterdate">
                        <label><label>{this.calculateDays(data.time)}</label></label>
                    </div>
                </div>
         </div>
         </Link>
        )
        return(
           <div className="container allnotifications">
           <h3><strong>All Notifications </strong></h3>
           <hr/>
           {notifications}
           </div>
        )
    }
}

export default Showallnotifications