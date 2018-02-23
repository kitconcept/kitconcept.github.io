import React from 'react';
import Link from 'gatsby-link';
import PypiStats from '../components/Stats/pypi';
import pypistatsinfo from '../stats.json';
import { format_number } from '../utils';

const IndexPage = () => (
  <div className="contributions">
    <h2>Open Source contributions by kitconcept GmbH.</h2>
    <div>
      <h3>Total releases per person</h3>
      <p className="contrib-person">
        <strong>Timo Stollenwerk:</strong>{' '}
        <span>{pypistatsinfo.timo_releases}</span>
      </p>{' '}
      <p className="contrib-person">
        <strong>Victor Fernández de Alba:</strong>{' '}
        <span>{pypistatsinfo.victor_releases}</span>
      </p>
      <p className="contrib-person">
        <strong>Carsten Senger:</strong>{' '}
        <span>{pypistatsinfo.carsten_releases}</span>
      </p>
      <p className="contrib-person">
        <strong>Roel Bruggink:</strong>{' '}
        <span>{pypistatsinfo.roel_releases}</span>
      </p>
    </div>
    <div>
      <h3>Total downloads</h3>
      <p className="contrib-person">
        <strong>kitconcept GmbH:</strong>{' '}
        <span>{format_number(pypistatsinfo.total_downloads)}</span>
      </p>
    </div>
    <div>
      <h3>Plone Core</h3>
      <div className="package">
        <PypiStats>
          <h4>plonetheme.barceloneta</h4>
          <p>Standard-Theme for Plone 5.</p>
          <h6>Co-author: Victor Fernandez de Alba</h6>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>plone.restapi</h4>
          <p>RESTful API for Plone.</p>
          <p>Ships with Plone 5.2</p>
          <p>
            <a href="https://pypi.python.org/pypi/plone.restapi" />
          </p>
          <h6>Main author: Timo Stollenwerk</h6>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>plone.rest</h4>
          <p>Plone support for HTTP verbs.</p>
          <p>Ships with Plone 5.2.</p>
          <p>
            <a href="https://pypi.python.org/pypi/plone.rest">Pypi Link</a>
          </p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>plone.app.contenttypes</h4>
          <p>Default content types for Plone based on Dexterity.</p>
          <p>Ships with Plone since 4.3</p>
          <p>
            <a href="https://pypi.python.org/pypi/plone.app.contenttypes">
              Pypi Link
            </a>
          </p>
          <h6>Co author: Timo Stollenwerk</h6>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>plone.app.collection</h4>
          <p>This package adds 'saved search' functionality to Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>plone.app.discussion</h4>
          <p>Enhanced discussion support for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>plone.app.multilingual</h4>
          <p>
            Multilingual Plone UI package, enables maintenance of translations
            for both Dexterity types and Archetypes.
          </p>
          <h6>Co-author: Victor Fernandez de Alba</h6>
        </PypiStats>
      </div>
    </div>
    <div>
      <h3>Plone Add-on Products</h3>
      <div className="package">
        <PypiStats>
          <h4>plone.formwidget.captcha</h4>
          <p>Captcha widget for Plone..</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>plone.formwidget.recaptcha</h4>
          <p>ReCaptcha widget for Plone..</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.akismet</h4>
          <p>Akismet plugin for plone.app.discussion.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.mailchimp</h4>
          <p>MailChimp integration for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.disableuser</h4>
          <p>Blocks login for specified users.</p>
          <h6>Main author: Roel Bruggink</h6>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>upc.remotecontrol</h4>
          <p>
            upc.remotecontrol is a tool for managing a set of Plone instances
            through XML- RPC calls.
          </p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.cas4plone</h4>
          <p>
            A PAS plugin that authenticates users against a CAS (Central
            Authentication Service) server.
          </p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>bobtemplates.kitconcept</h4>
          <p>kitconcept curated templates for Plone projects.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.autoresizetextarea</h4>
          <p>jQuery textarea auto-resizer for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.solr</h4>
          <p>Solr integration for external indexing and searching.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.lesscss</h4>
          <p>
            This package allow theme developers to add LESS stylesheets into a
            Plone site.
          </p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.pantry</h4>
          <p>
            An add-on for Plone that allows you to enhance the user experience
            on reusable templates on TinyMCE and Mosaic.
          </p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.geotransform</h4>
          <p>Gracefully email obfuscation for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.js.formvalidation</h4>
          <p>
            jQuery-based client-side form validation, based on
            http://bassistance.de/jquery-plugins/jquery-plugin-validation/.
          </p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.portlet.recentactivity</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.contentrules.mailtolocalrole</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>collective.z3cform.datetimewidget</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>js.jquery_joyride</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>js.socialshareprivacy</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>Products.Marshall</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>sphinxcontrib-httpexample</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
      </div>
      <div className="package">
        <PypiStats>
          <h4>wicked</h4>
          <p>Recent activity portlet for Plone.</p>
        </PypiStats>
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
        <div className="package">
          <PypiStats>
            <h4>robotframework-djangolibrary</h4>
            <p>A robot framework library for Django.</p>
          </PypiStats>
        </div>
        <div className="package">
          <PypiStats>
            <h4>robotframework-react</h4>
            <p>A robot framework library for React.</p>
          </PypiStats>
        </div>
        <div className="package">
          <PypiStats>
            <h4>robotframework-webpack</h4>
            <p>A robot framework library for Webpack.</p>
          </PypiStats>
        </div>
      </div>
      <div>
        <h3>Django</h3>
        <div className="package">
          <PypiStats>
            <h4>robotframework-djangolibrary</h4>
            <p>A robot framework library for Django.</p>
          </PypiStats>
        </div>
      </div>
      <div>
        <h3>React</h3>
        <div className="package">
          <PypiStats>
            <h4>robotframework-react</h4>
            <p>A robot framework library for React.</p>
          </PypiStats>
        </div>
      </div>
      <div>
        <h3>Solr</h3>
        <div className="package">
          <PypiStats>
            <h4>pytest-solr</h4>
            <p>Solr process and client fixtures for py.test.</p>
          </PypiStats>
        </div>
      </div>
      <div>
        <h3>Jenkins</h3>
        <div className="package">
          <PypiStats>
            <h4>plone.recipe.codeanalysis</h4>
            <p>Static code analysis for buildout-based Python projects.</p>
          </PypiStats>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
