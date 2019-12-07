import React from 'react'
import './requestmechanics.css'
import Usermaps from './usermaps'
import Requestmechanicform from './requestmechanicform'
class Requestmechanics extends React.Component{
    constructor(){
        super()
        this.state={
            companyid:''
        }
    }
    getCompanyId=(companyid)=>{
        this.setState({companyid:companyid})
        
    }
    render(){
        return(
            <div>
            <Usermaps company={this.getCompanyId}/>
            <Requestmechanicform/>
            </div>
        )
    }
}
export default Requestmechanics

