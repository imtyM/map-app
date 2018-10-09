import React, { Component } from 'react'
import {Card, CardTitle, CardText, Button} from 'react-md'
import './Map.sass'

class MapUI extends Component {
  render () {
    return (
      <Card>
        <CardTitle title='Map Actions' subtitle='' />
        <CardText >
          <h3>Debug</h3>
          <div className='md-grid'>
            <Button raised secondary swapTheming
              onClick={this.props.click}
              className='md-cell'
            >
            Poll Server
            </Button>
          </div>
        </CardText>
      </Card>
    )
  }
}

export default MapUI
