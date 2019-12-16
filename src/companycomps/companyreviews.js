import React from 'react'
import './companyreviews.css'
class Companyreviews extends React.Component{
    render(){
        return(
            <div className="companyreviews container">
            <div className="table-responsive">
            <table className="table table-striped text-truncate mb-0">
              <thead>
                <tr>
                  <th>Client Name</th>  
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <div className="companycustname">
                    <div className="companycustinitials">
                        JD
                    </div>
                   <div className="companycustnametext"><p> John Doe </p> </div>
                  </div>
                   </td>
                  <td>Review: LOREM IPSUM SEHR,UT DERMUS </td>
                  <td>$258</td> 
                  <td>11-08-2018</td>
                </tr>
                
                <tr>
                  <td>
                    <div className="companycustname">
                    <div className="companycustinitials">
                        AS
                    </div>
                    <div className="companycustnametext"><p> Ashton Miriels </p> </div>
                    </div>
                  </td>
                  <td>Review: LOREM IPSUM SEHR,UT DERMUS</td>
                  <td>$970</td>
                  <td>18-04-2018</td>
                </tr>
                 <tr>
                  <td>
                    <div className="companycustname">
                    <div className="companycustinitials">
                        AS
                    </div>
                    <div className="companycustnametext"><p> Ashton Miriels </p> </div>
                    </div>
                  </td>
                  <td>Review: LOREM IPSUM SEHR,UT DERMUS</td>
                  <td>$970</td>
                  <td>18-04-2018</td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        )
    }
}

export default Companyreviews