import React from 'react'
import './workersearch.css'
import data from '../home/cardsdata';
class Workersearch extends React.Component{
    constructor(props){
      super(props)
      this.state={
        workers:[]
      }
      console.log(this.props.worker)
    }
    componentDidMount(){
      this.getAllWorkers()
  }

  getAllWorkers=async()=>{
      const host = localStorage.getItem("Host")
      console.log(host)
      try{
      const res= await fetch(`http://localhost:4000/mechanic/workers?companyid=${host}`)
      const data= await res.json()
      console.log(data.Data)
      this.setState({
          workers:data.Data
      })
  }catch(err){
      console.log(err)
  }
  }
    render(){
      const workers = this.state.workers.map(data=>
              <tr key={data.worker_phone}>
                <td><p> {data.name} </p></td>
                <td>{data.worker_phone}</td>
                <td>{data.joining}</td>
              </tr>            
      )
        return(
            <div className="workerdescription">
            <div className="workertableheader">
            <strong style={{width:'100%', fontSize:'20px'}}> Workers table</strong>
            <div className="workersearchcontainer">
                <input type="text" className="workersearch form-control" placeholder="Search..." />
                <div className="workersearchbtncontainer">
                    <button className="workersearchbtn btn btn-primary"> <img src="./images/workersearch.png"/></button>
                </div>
            </div>
            </div>
            <div className="table-responsive workertable">
            <table className="table table-striped text-nowrap mb-0">
              <thead>
                <tr>
                  <th>Client Name</th>  
                  <th>Phone no</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
              {workers}
              </tbody>
            </table>
          </div>
            </div>
        )
    }
}

export default Workersearch