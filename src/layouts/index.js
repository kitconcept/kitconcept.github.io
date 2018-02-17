import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'
bootstrapTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  }
})

const typography = new Typography(bootstrapTheme)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="kitconcept Open Source"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'Open Source, Plone, Python, JavaScript, React, Angular, Solr, Robot Framework' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
