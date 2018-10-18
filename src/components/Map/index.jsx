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
    this.startPolling = this.startPolling.bind(this)
    this.stopPolling = this.stopPolling.bind(this)
    this.poll = this.poll.bind(this)

    this.processData = this.processData.bind(this)

    this.state = {
      currentLocation: {
        lat: -25.753359,
        lng: 28.228935
      },
      mapUI: {
        buttonLabel: 'Start',
        switchLabel: 'inactive',
        switchEnable: false
      },

      polling: false
    }
  }

  setLocation (lat, lng) {
    this.setState({
      currentLocation: {
        lat,
        lng
      }
    })
  }

  processData (data) {
    // currently hard codded
    console.log(data.Item.val)
    const location = data.Item.val
    if (location === 'shaun') {
      this.setLocation(-25.753953, 28.229920)
    } else if (location === 'imtiaz') {
      this.setLocation(-25.753765, 28.228836)
    } else if (location === 'franco') {
      this.setLocation(-25.753845, 28.228982)
    } else {
      this.setLocation(-25.753806, 28.228497)
    }
  }
  pollClick () {
    if (this.state.polling) { this.stopPolling() } else { this.startPolling() }
  }

  startPolling () {
    this.setState({
      mapUI: {
        buttonLabel: 'Stop',
        switchLabel: 'active',
        switchEnable: true
      },
      polling: true
    })
    this.poll()
  }
  poll () {
    axios.get('https://8pi5e8eqs7.execute-api.eu-west-1.amazonaws.com/latest/currentLocation')
      .then(res => {
        this.processData(res.data.data)
      })
      .catch(err => {
        console.log('error has occured', err)
      })
      .then(() => {
        if (this.state.polling) { this.poll() }
      })
  }
  stopPolling () {
    this.setState({
      mapUI: {
        buttonLabel: 'Start',
        switchLabel: 'inactive',
        switchEnable: false
      },
      polling: false
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
        <MapUI
          click={() => {
            this.pollClick()
          }}
          buttonLabel={this.state.mapUI.buttonLabel}
          switchLabel={this.state.mapUI.switchLabel}
          switchEnable={this.state.mapUI.switchEnable}
        />
      </div>
    )
  }
}

export default index
