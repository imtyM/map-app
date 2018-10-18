import React, { Component } from 'react'
import {Card, CardTitle, CardText, Button, Switch} from 'react-md'
import './Map.sass'

class MapUI extends Component {
  switchClick () {
    console.log('this is the switch ref', this.switch)
    this.props.click()
  }
  render () {
    return (
      <Card>
        <CardTitle style={{justifyContent: 'center'}} title='Map Actions' subtitle='' />
        <CardText >
          <div className='md-grid'>
            <Switch
              ref={(c) => { this.switch = c }}
              className='md-cell--2'
              id='polling-switch'
              type='switch'
              label={this.props.switchLabel}
              name='polling switch'
              checked={this.props.switchEnable}
              onChange={() => {}}
            />
            <Button
              raised
              secondary
              swapTheming
              onClick={() => this.switchClick()}
              className='md-cell--12'
            >
              {this.props.buttonLabel}
            </Button>
          </div>
        </CardText>
      </Card>
    )
  }
}

export default MapUI
