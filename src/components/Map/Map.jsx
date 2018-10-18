import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {
  render () {
    return (
      <div className='map-container' >
        <Map
          google={this.props.google}
          zoom={20}
          initialCenter={this.props.currentLocation}
          style={{
          }}
        >
          <Marker
            position={this.props.currentLocation}
            name='Current location'
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEBQ2_XaNoVsMEBNim_8mQ78lq_RGRN4I'
})(MapContainer)
