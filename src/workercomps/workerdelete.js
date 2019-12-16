import React from 'react'
import './workerdelete.css'
class Workerdelete extends React.Component{
    render(){   
        return(
            <div style={{height:'100vh'}}>
                <div className="md-form container workerdel">
                    <form>
                        <div className="deleteworkerinpts row">
                            <input className="form-control inpwork" type="text" placeholder="Phoneno"/>
                            <button className="form-control btn btn-primary delbtn">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Workerdelete