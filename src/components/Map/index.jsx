import React, { Component } from 'react'
import {Card} from 'react-md'
import ContainerDimenstions from 'react-container-dimensions'
import axios from 'axios'
import './Map.sass'
import Map from './Map'
import MapUI from './MapUI'

class index extends Component {
  constructor () {
    super()
    this.pollClick = this.pollClick.bind(this)
    this.state = {
      currentLocation: {}
    }
  }

  pollClick () {
    // TODO: call to server for current location here.
    console.log('Poll has been clicked, doing get')
    console.log(this)
    axios.get('https://8pi5e8eqs7.execute-api.eu-west-1.amazonaws.com/latest/currentLocation')
      .then(res => {
        console.log(res)
      })
  }

  render () {
    return (
      <div className='map-grid'>
        <Card >
          <ContainerDimenstions>
            <Map currentLocation={this.state.currentLocation} />
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
