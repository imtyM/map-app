import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import Map from '../components/Map'

class Index extends React.Component {
  render () {
    return (
      <Layout location={this.props.location} title='Map'>
        <div className='index-container'>
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel='canonical' href={`${config.siteUrl}`} />
          </Helmet>
          <Map />
        </div>
      </Layout>
    )
  }
}

export default Index
