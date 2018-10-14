import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {
  render () {
    return (
      <div className='map-container' >
        <Map
          google={this.props.google}
          zoom={20}
          initialCenter={{
            lat: -25.753359,
            lng: 28.228935
          }}
          style={{
          }}
        >
          <Marker
            position={this.props.currentLocation}
            name='Current location'
          />
          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEBQ2_XaNoVsMEBNim_8mQ78lq_RGRN4I'
})(MapContainer)
