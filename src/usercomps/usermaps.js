import React from 'react'
import ReactDOM from 'react-dom';
import './usermaps.css'
import  Popup  from './popup'
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken="pk.eyJ1IjoiZmFoZWVsc2F0dGFyIiwiYSI6ImNrMjBydGYweDFid2ozY28wcWoxeHMzMDAifQ.lzfIjiO780GD5Ydc7IiJGQ"

class Usermaps extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lat: 0,
            lng: 0,
            zoom: 12,
            companyid:''
        };
    }
    getCompanies = async (position)=>{
        try{
        const res = await fetch(`http://localhost:4000/user/mechaniccompanies?lat=${position.coords.latitude}&long=${position.coords.longitude}`)
        const data= await res.json()
        this.setState({
            Companies:data
        })
    }catch(err){
        console.log(err)
    }
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition( async position=>{
        await this.getCompanies(position)
        
        this.setState({
            lat:position.coords.latitude,
            lng:position.coords.longitude,
        }) 
       var Eo=(distance,duration,address,companyid,companyname)=>{
        return <Popup
        distance={distance}
        duration={duration}
        companyname={companyname}
        companyid={companyid}
        address={address}
        call={companyid=>{
            this.props.company(companyid)
        }}
        />
    }
        const Comp=this.state.Companies
        console.log(Comp)
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            })  
            var marker = new mapboxgl.Marker({
                draggable: false,
                iconUrl: 'https://www.mapbox.com/mapbox.js/assets/images/astronaut2.png'
            })
            .setLngLat([this.state.lng,this.state.lat])
            .addTo(map);
            Comp.Data.forEach((item,index,array)=>{
                var marker = new mapboxgl.Marker({
                    draggable: false
                })
                .setLngLat([array[index].longitude,array[index].latitude])
                .addTo(map);
                console.log(array[index].longitude)
            })
            
        
            //24.899013, 67.087252
            //24.895931,67.079669
            //24.8987045,67.0820293
           // var bounds = [[-123.069003, 45.395273], [-122.303707, 45.612333]];
           // map.setMaxBounds(bounds);

            // initialize the map canvas to interact with later
            const canvas = map.getCanvasContainer();
            // an arbitrary start will always be the same
            // only the end or destination will change
            const start = [this.state.lng, this.state.lat];
            const lng=this.state.lng
            const lat=this.state.lat
            // create a function to make a directions request
       async function getRoute(end) {
            // make a directions request using cycling profile
            // an arbitrary start will always be the same
            // only the end or destination will change
            const start = [lng , lat];
            const url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
           const query= await fetch(url)
           const req= await query.json()
           console.log(req)
           const data = req.routes[0];
           var route = data.geometry.coordinates;
           console.log(route)
            var geojson = {
                type: 'Feature',
                properties: {},
                geometry: {
                type: 'LineString',
                coordinates: route
                }
            };
            // if the route already exists on the map, reset it using setData
            if (map.getSource('route')) {
                map.getSource('route').setData(geojson);
            } else { // otherwise, make a new request
                map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: geojson
                    }
                    }
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': 'black',
                    'line-width': 3,
                    'line-opacity': 0.75
                }
                });

                
            } 
            // add turn instructions here at the end
            return data
        }
        
        map.on('load', function() {
            // make an initial directions request that
            // starts and ends at the same location
            getRoute(start);
        
            // Add starting point to the map
            map.addLayer({
            id: 'point',
            type: 'circle',
            source: {
                type: 'geojson',
                data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                    type: 'Point',
                    coordinates: start
                    }
                }
                ]
                }
            },
            paint: {
                'circle-radius': 10,
                'circle-color': '#7827AE'
            }
            });
            // this is where the code from the next step will go
            var count=0
            map.on('click', async function(e) {
            var coordsObj = e.lngLat;
            count++
            canvas.style.cursor = '';
            if(count>Comp.Data.length)
            count=1
            var coords = [Comp.Data[count-1].longitude,Comp.Data[count-1].latitude]
            console.log(Comp.Data[count-1].longitude,Comp.Data[count-1].latitude)
            console.log(count)
            var end = {
                type: 'FeatureCollection',
                features: [{
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: coords
                }
                }
                ]
            };
            if (map.getLayer('end')) {
                map.getSource('end').setData(end);
            } else {
                map.addLayer({
                id: 'end',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                        type: 'Point',
                        coordinates: coords
                        }
                    }]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#008000',
                }
                
                });
            }
            const dist= await getRoute(coords);
            console.log(dist.distance)
            var popup = new mapboxgl.Popup()
            .setLngLat(coords)
            .setHTML(
                `<div class="maptext" id="${Comp.Data[count-1].company_id} maptextid"> </div>`
            )
            .addTo(map);
                
            ReactDOM.render(
            Eo(dist.distance, dist.duration,dist.legs[0].summary,Comp.Data[count-1].company_id, Comp.Data[count-1].company_name),
            document.querySelector('.maptext')
            );
            });
            
        })
        
        })   
        
    }
    render(){
        return(
            <div className="maps">
                <div className='sidebarStyle'>
                <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' style={{height:'70vh'}} />
                </div>

        )
    }
}
export default Usermaps