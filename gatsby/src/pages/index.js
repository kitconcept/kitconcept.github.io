import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>
      Open Source contributions by kitconcept GmbH.
    </h2>
    <div>
      <h3>Plone Core</h3>
      <div>
        <h4>plonetheme.barceloneta</h4>
        <p>Standard-Theme for Plone 5.</p>
        <h6>Co-author: Victor Fernandez de Alba</h6>
      </div>
      <div>
        <h4>plone.restapi</h4>
        <p>RESTful API for Plone.</p>
        <p>Ships with Plone 5.2</p>
        <p>
          <a href="https://pypi.python.org/pypi/plone.restapi" />
        </p>
        <h6>Main author: Timo Stollenwerk</h6>
      </div>
      <div>
        <h4>plone.rest</h4>
        <p>Plone support for HTTP verbs.</p>
        <p>Ships with Plone 5.2.</p>
        <p>
          <a href="https://pypi.python.org/pypi/plone.rest">Pypi Link</a>
        </p>
      </div>
      <div>
        <h4>plone.app.contenttypes</h4>
        <p>Default content types for Plone based on Dexterity.</p>
        <p>Ships with Plone since 4.3</p>
        <p>
          <a href="https://pypi.python.org/pypi/plone.app.contenttypes">
            Pypi Link
          </a>
        </p>
        <h6>Co author: Timo Stollenwerk</h6>
      </div>
      <div>
        <h4>plone.app.collection</h4>
      </div>
      <div>
        <h4>plone.app.discussion</h4>
      </div>
      <div>
        <h4>plone.app.multilingual</h4>
        <h6>Co-author: Victor Fernandez de Alba</h6>
      </div>
    </div>
    <div>
      <h3>Plone Add-on Products</h3>
      <div>
        <h4>plone.formwidget.captach</h4>
      </div>
      <div>
        <h4>plone.formwidget.recaptcha</h4>
      </div>
      <div>
        <h4>collective.akismet</h4>
        <p>Akismet plugin for plone.app.discussion.</p>
      </div>
      <div>
        <h4>collective.mailchimp</h4>
      </div>
      <div>
        <h4>collective.disableuser</h4>
        <p>Blocks login for specified users Roel Bruggink</p>
        <h6>Main author: Roel Bruggink</h6>
      </div>
      <div>
        <h4>upc.remotecontrol</h4>
      </div>
      <div>
        <h4>collective.cas4plone</h4>
        <p>
          A PAS plugin that authenticates users against a CAS (Central
          Authentication Service) server.
        </p>
        <div>
          <h4>bobtemplates.kitconcept</h4>
        </div>
        <div>
          <h4>collective.akismet</h4>
        </div>
        <div>
          <h4>collective.autoresizetextarea</h4>
        </div>
        <div>
          <h4>collective.solr</h4>
        </div>
        <div>
          <h4>collective.lesscss</h4>
          <p>This package allow theme developers to add LESS stylesheets into a Plone site.</p>
        </div>
        <div>
          <h4>collective.pantry</h4>
        </div>
        <div>
          <h4>collective.geotransform</h4>
        </div>
        <div>
          <h4>collective.js.formvalidation</h4>
        </div>
        <div>
          <h4>collective.portlet.recentactivity</h4>
        </div>
      </div>
      <div>
        <h3>Plone Themes</h3>
        <ul>
          <li>plonetheme.mimbo</li>
          <li>plonetheme.solemnity</li>
          <li>plonetheme.stylized</li>
          <li>plonetheme.sunburst</li>
        </ul>
      </div>
      <div>
        <h3>Robot Framework</h3>
        <h4>robotframework-djangolibrary</h4>
        <h4>robotframework-react</h4>
        <h4>robotframework-webpack</h4>
      </div>
      <div>
        <h3>Django</h3>
        <h4>robotframework-djangolibrary</h4>
      </div>
      <div>
        <h3>React</h3>
        <h4>robotframework-react</h4>
      </div>
      <div>
        <h3>Solr</h3>
        <h4>pytest-solr</h4>
      </div>
      <div>
        <h3>Jenkins</h3>
        <h4>plone.recipe.codeanalysis</h4>
      </div>
    </div>
  </div>
);

export default IndexPage
