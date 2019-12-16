import React from 'react'
import './workermain.css'
import Workersidebar from '../sharedcomps/workersidebar';
import Workercharts from './workercharts'
import Workersearch from './workersearch'
import Workercards from './workercards'
import Workerdelete from './workerdelete'
import Workerregister from './workerregister'

class Workermain extends React.Component{
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
            <div className="workermain">
            <Workersidebar call={this.knowComponent}/>
            <div className="workeroperations">
              {
                  this.state.comp == "register" || this.state.comp=="delete"?
                  this.state.comp=="register"?
                  <Workerregister/>
                  :
                  <Workerdelete/>
                  :
                  <div>
                    <Workersearch/>
                    <Workercards/>
                    <Workercharts/>
                  </div>
              }        
            </div>
            </div>
        )
    }
}

export default Workermain