from pprint import pprint
import json
import requests

PACKAGES = [
    'collective.solr',
    'plonetheme.barceloneta',
    'plone.restapi',
    'plone.rest',
    'plone.app.contenttypes',
    'plone.app.collection',
    'plone.app.discussion',
    'plone.app.multilingual',
    'plone.formwidget.captcha',
    'plone.formwidget.recaptcha',
    'collective.akismet',
    'collective.mailchimp',
    'collective.disableuser',
    'upc.remotecontrol',
    'collective.cas4plone',
    'bobtemplates.kitconcept',
    'collective.akismet',
    'collective.autoresizetextarea',
    'collective.lesscss',
    'collective.pantry',
    'collective.geotransform',
    'collective.js.formvalidation',
    'collective.portlet.recentactivity',
    'plonetheme.mimbo',
    'plonetheme.solemnity',
    'plonetheme.stylized',
    'plonetheme.sunburst',
    'robotframework-djangolibrary',
    'robotframework-react',
    'robotframework-webpack',
    'pytest-solr',
    'plone.recipe.codeanalysis'
]

results = {}
for package in PACKAGES:
    result = {}
    url = 'https://pypi.python.org/pypi/{0}/json'.format(package)
    rq = requests.get(url)
    if rq.status_code != 200:
        print('Can not fetch url {0}'.format(url))
    else:
        rq = rq.json()
        result['releases'] = len(rq['releases'].keys())
        downloads = 0
        for release in rq['releases']:
            downloads = downloads + rq['releases'][release][0]['downloads']
        result['downloads'] = downloads
        results.update({package: result})

with open('src/stats.json', 'w') as statsfile:
    statsfile.write(json.dumps(results))
pprint(results)
