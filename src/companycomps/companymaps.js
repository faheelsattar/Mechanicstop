import React from 'react'
import './companymaps.css'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken="pk.eyJ1IjoiZmFoZWVsc2F0dGFyIiwiYSI6ImNrMjBydGYweDFid2ozY28wcWoxeHMzMDAifQ.lzfIjiO780GD5Ydc7IiJGQ"


class Companymaps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            zoom: 12,
            companylat:'',
            companylong:'',
            userlat:this.props.userlocation.userlat,
            userlong:this.props.userlocation.userlng
        }
        console.log(this.props)
    }
    getCompanyLocation = async ()=>{
        const host=localStorage.getItem('Host')
        console.log(host)
        try{
            const res = await fetch(`http://localhost:4000/mechanic/getcompany?companyid=${host}`)
            const data = await res.json()
            console.log(data.Data[0].longitude)
            this.setState({
                companylat:data.Data[0].latitude,
                companylong:data.Data[0].longitude
            })
        }catch(err){
            console.log(err)
        }
    }
   async componentDidMount(){
        await this.getCompanyLocation()
        console.log(this.state.companylat)
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.companylong, this.state.companylat],
            zoom: this.state.zoom,
        })  
        var marker = new mapboxgl.Marker({
            draggable: false,
            iconUrl: 'https://www.mapbox.com/mapbox.js/assets/images/astronaut2.png'
        })
        .setLngLat([this.state.companylong, this.state.companylat])
        .addTo(map);

        var marker = new mapboxgl.Marker({
            draggable: false,
            iconUrl: 'https://www.mapbox.com/mapbox.js/assets/images/astronaut2.png'
        })
        .setLngLat([this.state.userlong, this.state.userlat])
        .addTo(map);
        
        const canvas = map.getCanvasContainer();
        const start = [this.state.companylong, this.state.companylat];
        const companylng=this.state.companylong
        const companylat=this.state.companylat
        const userlng=this.state.userlong
        const userlat= this.state.userlat
        async function getRoute(end) {
            // make a directions request using cycling profile
            // an arbitrary start will always be the same
            // only the end or destination will change
            const start = [companylng , companylat];
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
        map.on('load', async function() {
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
            canvas.style.cursor = '';
            var coords = [userlng,userlat]
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
        })
    }
    render(){
        return(
            <div>
            <div ref={el => this.mapContainer = el} className='mapContainer' style={{height:'70vh'}} />
            </div>
        )
    }
}

export default Companymaps