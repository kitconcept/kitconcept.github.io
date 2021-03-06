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
    'plone.recipe.codeanalysis',
    'collective.contentrules.mailtolocalrole',
    'collective.z3cform.datetimewidget',
    'js.jquery_joyride',
    'js.socialshareprivacy',
    'Products.Marshall',
    'sphinxcontrib-httpexample',
    'wicked',
    'plone.api',
    'Products.TinyMCE',
    'plone.app.changeownership',
    'collective.multilanguagefields',
    'fourdigits.seo',
    'collective.classifieds',
    'iw.rejectanonymous',
    'collective.alias',
    'fourdigits.portlet.keywordrelated',
    'fourdigits.remotemembrane',
    'Products.Faq',
    'collective.ploneslimbar',
    'Products.PloneSoftwareCenter',
    'collective.anonymousview',
    'fourdigits.chosen',
    'collective.ordereddict'
]
TIMO_RELEASES = [
    'collective.solr', 'plone.restapi', 'plone.rest',
    'plone.app.contenttypes', 'plone.app.collection',
    'bobtemplates.kitconcept',
    'plone.app.discussion', 'plone.formwidget.captcha',
    'plone.formwidget.recaptcha',
    'collective.akismet', 'collective.autoresizetextarea',
    'collective.js.formvalidation',
    'collective.mailchimp', 'collective.disableuser',
    'upc.remotecontrol', 'plonetheme.mimbo', 'plonetheme.solemnity',
    'plonetheme.stylized', 'plonetheme.sunburst',
    'robotframework-djangolibrary',
    'robotframework-react', 'robotframework-webpack', 'pytest-solr',
    'plone.recipe.codeanalysis'
]

VICTOR_RELEASES = [
    'collective.geotransform', 'collective.cas4plone',
    'collective.pantry', 'collective.lesscss',
    'plonetheme.barceloneta',
    'plone.app.multilingual',
]

ROEL_RELEASES = [
    'collective.disableuser',
    'plone.api',
    'Products.TinyMCE',
    'plone.app.changeownership',
    'collective.multilanguagefields',
    'fourdigits.seo',
    'collective.classifieds',
    'iw.rejectanonymous',
    'collective.alias',
    'fourdigits.portlet.keywordrelated',
    'fourdigits.remotemembrane',
    'Products.Faq',
    'collective.ploneslimbar',
    'Products.PloneSoftwareCenter',
    'collective.anonymousview',
    'fourdigits.chosen',
    'collective.ordereddict'
]

CARSTEN_RELEASES = [
    'collective.contentrules.mailtolocalrole',
    'collective.z3cform.datetimewidget',
    'js.jquery_joyride',
    'js.socialshareprivacy',
    'Products.Marshall',
    'sphinxcontrib-httpexample',
    'wicked',
]

results = {}
timo_releases = 0
victor_releases = 0
roel_releases = 0
carsten_releases = 0
total_downloads = 0

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
            try:
                downloads = downloads + rq['releases'][release][0]['downloads']
            except:
                pass

        result['downloads'] = downloads
        results.update({package: result})

        # Package can be assigned to several people (not for now)
        if package in TIMO_RELEASES:
            timo_releases = timo_releases + result['releases']
        if package in VICTOR_RELEASES:
            victor_releases = victor_releases + result['releases']
        if package in ROEL_RELEASES:
            roel_releases = roel_releases + result['releases']
        if package in CARSTEN_RELEASES:
            carsten_releases = carsten_releases + result['releases']

        # Downloads summariser
        total_downloads = total_downloads + downloads

results['timo_releases'] = timo_releases
results['victor_releases'] = victor_releases
results['roel_releases'] = roel_releases
results['carsten_releases'] = carsten_releases
results['total_downloads'] = total_downloads

with open('src/stats.json', 'w') as statsfile:
    statsfile.write(json.dumps(results))
pprint(results)
