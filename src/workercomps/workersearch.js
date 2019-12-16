import React from 'react'
import './workersearch.css'
class Workersearch extends React.Component{
    render(){
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
                <tr>
                  <td><p> John Doe </p></td>
                  <td>03002527387</td>
                  <td>11-08-2018</td>
                </tr>

                 <tr>
                  <td><p> John Doe </p></td>
                  <td>03002527387</td>
                  <td>11-08-2018</td>
                </tr>

              </tbody>
            </table>
          </div>
            </div>
        )
    }
}

export default Workersearch