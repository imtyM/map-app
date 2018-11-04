import React, { Component } from 'react'
import { Card, CardTitle, CardText, Button, Switch } from 'react-md'
import './Map.sass'

class MapUI extends Component {
  switchClick () {
    console.log('this is the switch ref', this.switch)
    this.props.click()
  }
  render () {
    return (
      <Card>
        <CardTitle style={{ justifyContent: 'center' }} title='Map Actions' subtitle='' />
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
              onChange={() => { }}
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

            <CardTitle title={this.props.currentVal} className='md-cell--4' />
            {/* <CardTitle title='LTE' className='md-cell--4' /> */}
            {/* <FontIcon className='md-cell--4'>signal_cellular_4_bar</FontIcon> */}
            {/* <h1 className='md-cell--4'>4</h1> */}

            <CardTitle title={this.props.currentCounter} className='md-cell--4' />
            {/* <CardTitle title='LTE' className='md-cell--4' /> */}
            {/* <h1 className='md-cell--4'>5</h1> */}

            {/* <CardTitle title='Telkom' className='md-cell--4' /> */}
            {/* <CardTitle title='GSM' className='md-cell--4' /> */}
            {/* <h1 className='md-cell--4'>4</h1> */}

            {/* <CardTitle title='CellC' className='md-cell--4' /> */}
            {/* <CardTitle title='LTE' className='md-cell--4' /> */}
            {/* <h1 className='md-cell--4'>3</h1> */}

          </div>
        </CardText>
      </Card>
    )
  }
}

export default MapUI
