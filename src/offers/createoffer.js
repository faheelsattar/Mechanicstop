import React from 'react'
import './createoffer.css'

class Createoffer extends React.Component{
    constructor(){
        super()
        this.state={
            load:false,
        }
        this.loadForm=this.loadForm.bind(this)
    }

    loadForm=(event)=>{
        event.preventDefault()
        this.setState({
            load:!this.state.load
        })
    }

    checkDiscount=(event)=>{
        if(event.target.checked){
            document.getElementById('discountvalue').readOnly=false
        }else{
            document.getElementById('discountvalue').readOnly=true
        }
    }
    activeDiscount=()=>{
        return this.state.check
    }
    render(){
        return(
            <div style={{height:'100vh'}}>
            <div style={{textAlign:'center'}}><h1>Create Offer</h1></div>
            <div className="container row">
            <div className="col-md-6 createoffer">
                <a href="" onClick={this.loadForm} className="createofferbtn">Create Offer</a>
                {
                    this.state.load==true ? 
                    <div className="createofferform">
                        <form className="md-form offerform">
                            <input className="form-control inpwork" name="offername" placeholder="Offer name" type="text"/>
                            <input className="form-control inpwork" name="offer_description" placeholder="Offer Description" type="text"/>
                            <input className="form-control inpwork" name="distance" placeholder="Distance (m)" type="number"/>
                            <input className="form-control inpwork startdate" name="start_date" placeholder="Start date"
                            type="text" onFocus={event=>event.target.type="date"} onBlur={event=>event.target.type="text"} />
                            <input className="form-control inpwork enddate" name="end_date" placeholder="End date"
                            type="text" onFocus={event=>event.target.type="date"} onBlur={event=>event.target.type="text"} />
                            <input className="form-control inpwork" name="price" placeholder="Price" type="number"/>
                            <div className="discount">
                            <input className="form-control inpwork" id="discountvalue" readOnly name="discount" placeholder="Discount %" type="number"/>
                            <input className="form-control discheck inpwork" onChange={this.checkDiscount} type="checkbox"/>
                            </div>
                            <button className="form-control offerbtn btn btn-primary">Create</button>
                        </form>
                    </div>
                    :
                    <div> </div>
                }
            </div>
            </div>
            </div>
        )
    }
}

export default Createoffer