import React from 'react'
import './companycharts.css'
import { Line } from 'react-chartjs-2'
class Companycharts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{
                labels:["1","2","3","4","5","6","7"],
                datasets:[
                    {
                    label:"Revenue Made",
                    borderWidth:1,
                    borderColor:"rgb(14, 33, 70)",
                    data:[4,5,1,10,32,2,12]
                }
                ]
            }
        }
    }
    render(){
        return(
            <div className="companychart" style={{position:"relative", height:"320px"}}>
                <Line
                    options={{
                        responsive:true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:false,
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:true
                                }   
                            }]
                        },
                        maintainAspectRatio: false,
                    }}
                    data={this.state.data}
                />
                
            </div>
        )
    }
}

export default Companycharts