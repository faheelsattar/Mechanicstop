import React from 'react'
import './companyrequests'
import Companymaps from './companymaps'
import { Z_DATA_ERROR } from 'zlib';

class Companyrequests extends React.Component{
    constructor(props){
        super(props)
        this.state={
            requestid:this.props.match.params.key,
            request:[]
        }
    }

    componentDidMount(){
        this.getSpecificRequest()
    }
    getSpecificRequest=async()=>{
        try{
        const host = localStorage.getItem('Host')
        const result= await fetch(`http://localhost:4000/requests/specificrequests?hostid=${host}&reqid=${this.state.requestid}`)
        const data= await result.json();
        console.log(data.Data[0].request_ID)
        this.setState({
            request:data.Data
        })
        console.log(this.state.request.latitude)
    }catch(err){
        console.log(err)
    }
    }
    render(){
        const request= this.state.request
        if(request.length==0){
            return null
        }
        return(
            <div>
            <Companymaps userlocation={{userlat:this.state.request[0].latitude,userlng:this.state.request[0].longitude}}/>       
            </div>
        )
    }
}

export default Companyrequests