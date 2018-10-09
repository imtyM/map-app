import React, { Component } from 'react'
import {Card} from 'react-md'
import ContainerDimenstions from 'react-container-dimensions'
import './Map.sass'
import Map from './Map'
import MapUI from './MapUI'

class index extends Component {
  constructor () {
    super()
    this.pollClick = this.pollClick.bind(this)
  }

  pollClick () {
    // TODO: call to server for current location here.
    console.log(this)
    console.log('I have been clicked')
  }

  render () {
    return (
      <div className='map-grid'>
        <Card >
          <ContainerDimenstions>
            <Map />
          </ContainerDimenstions>
        </Card>
        <MapUI click={() => {
          this.pollClick()
        }}
        />
      </div>
    )
  }
}

export default index
