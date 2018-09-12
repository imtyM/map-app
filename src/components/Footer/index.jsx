import React, { Component } from 'react'
import UserLinks from '../UserLinks'
import config from '../../../data/SiteConfig'
import './Footer.scss'

class Footer extends Component {
  render () {
    const { userLinks } = this.props
    const { copyright, fixedFooter } = config
    if (!copyright) {
      return null
    }
    return (
      <footer className={fixedFooter ? 'footer footer-fixed' : 'footer'}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className='notice-container' />
      </footer>
    )
  }
}

export default Footer
