import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
const TOKEN='pk.eyJ1IjoiZmFoZWVsc2F0dGFyIiwiYSI6ImNrMjBydGYweDFid2ozY28wcWoxeHMzMDAifQ.lzfIjiO780GD5Ydc7IiJGQ';
class Map extends React.Component{
  constructor(){
    super()
    this.state={
      viewport:{
        width:"100vw",
        height:"100vh",
        latitude:42.430472,
        longitude:-123.334102,
        zoom:16
      },
      userlocation:{}
    }
    this.setUserLocation= this.setUserLocation.bind(this)
  }
  _onViewportChange = viewport => this.setState({viewport}); 
  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let setUserLocation = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        };
        let newViewport = {
            height: "100vh",
            width: "100vw",
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 12
        }
        this.setState({
            viewport: newViewport,
            userlocation:setUserLocation
        })  
    })
}
  render(){
    return(
      <div className="App">
      <button onClick={this.setUserLocation}>My location</button>
      <div className="map">
      <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={this._onViewportChange}mapboxApiAccessToken={TOKEN}>
      </ReactMapGL>
      </div>
      </div>
    )
  }
}
export default Map