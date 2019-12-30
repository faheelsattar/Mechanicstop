import React from 'react'
import './offersmain.css'
import Workersidebar from '../sharedcomps/workersidebar'
import Createoffer from './createoffer';
import Offersongoing from './offersongoing'

class Offersmain extends React.Component{
    constructor(){
        super()
        this.state={
            comp:''
        }
        this.knowComponent= this.knowComponent.bind(this)
        }
    knowComponent=(compo)=>{
        console.log(compo)
        this.setState({
            comp:compo
        })
    }
    render(){
        return(
            <div className="offersmain">
                <Workersidebar call={this.knowComponent} host="offer"/>
                <div className="offeroperations">
                    { 
                        this.state.comp=="createoffer" ?
                        <Createoffer/>
                        :
                        <Offersongoing/>
                    }
                </div>
            </div>
        )
    }
}

export default Offersmain