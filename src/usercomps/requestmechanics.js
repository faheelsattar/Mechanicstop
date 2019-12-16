import React from 'react'
import './requestmechanics.css'
import Usermaps from './usermaps'
import Requestmechanicform from './requestmechanicform'
class Requestmechanics extends React.Component{
    constructor(){
        super()
        this.state={
            companyid:'',
            latitude:'',
            longitude:''
        }
    }
    getCompanyId=(companyid,latitude,longitude)=>{
        this.setState({
            companyid:companyid,
            latitude:latitude,
            longitude:longitude
        }) 
    }
    render(){
        return(
            <div>
            <Usermaps company={this.getCompanyId}/>
            <Requestmechanicform
            companyid={this.state.companyid}
            latitude={this.state.latitude}
            longitude={this.state.longitude} 
            />
            </div>
        )
    }
}
export default Requestmechanics

