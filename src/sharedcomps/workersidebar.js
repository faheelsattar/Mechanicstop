import React from 'react'
import './workersidebar.css'
class Workersidebar extends React.Component{
    selectWorker=(event)=>{
        this.props.call("workers")
    }
    selectRegister=()=>{
        this.props.call("register")
    }
    selectDelete=(event)=>{
        this.props.call("delete")
    }
    
    render(){
        return(
            <div className="workersidebar">
                <aside>
                    <div className="workersidebarholder">
                        <ul className="workersidebarmenu">
                            <li className="sidebaritem">
                               <a onClick={this.selectWorker} name="workers" className="workerlink worklink">
                               <img src="./images/worker.png" />
                              <span> Worker Details </span>
                              </a>
                             </li>
                            <li className="sidebaritem">
                                <a onClick={this.selectRegister} name="register" className="workerlink reglink">
                                <img src="./images/registerworker.png" />
                                <span> Register Worker </span>
                               </a>
                            </li>
                            <li className="sidebaritem">
                                <a onClick={this.selectDelete} name="delete" className="workerlink deletelink">
                                <img src="./images/deleteworker.png"/>
                                <span>Delete Workers </span>
                                </a>
                            </li>     
                        </ul>
                    </div>
                </aside>
            </div>
        )
    }
}

export default Workersidebar