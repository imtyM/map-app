import React, { Component } from 'react'
import {Card} from 'react-md'
import ContainerDimenstions from 'react-container-dimensions'
import './Map.sass'
import Map from './Map'
import MapUI from './MapUI'

class index extends Component {
  render () {
    return (
      <div className='map-grid'>

        <Card >
          <ContainerDimenstions>
            <Map />
          </ContainerDimenstions>
        </Card>

        <MapUI />
      </div>
    )
  }
}

export default index
