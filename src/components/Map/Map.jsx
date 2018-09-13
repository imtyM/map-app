import React, { Component } from 'react'
import Card from 'react-md/lib/Cards/Card'
import './Map.sass'

class Map extends Component {
  render () {
    return (
      <div className='map-container'>
        <Card />
        <Card />
      </div>
    )
  }
}

export default Map
