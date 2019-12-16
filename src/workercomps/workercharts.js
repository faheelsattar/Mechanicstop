import React from 'react'
import './workercharts.css'
import { Line } from 'react-chartjs-2'
class Workercharts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{
                labels:["1","2","3","4","5","6","7"],
                datasets:[
                    {
                    label:"Revenue Made",
                    borderWidth:1,
                    backgroundColor:'#6777ef',
                    borderColor:"rgb(20, 33, 70)",
                    data:[4,5,1,10,32,2,12]
                }
                ]
            }
        }
    }
    render(){
        return(
            <div className="workerchart" style={{position:"relative", height:"280px"}}>
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
                                    display:false
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

export default Workercharts