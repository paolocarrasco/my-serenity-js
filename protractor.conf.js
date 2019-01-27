const
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop(),
    crew = require('serenity-js/lib/stage_crew');

exports.config = {

    baseUrl: 'http://todomvc.com',

    seleniumServerJar: seleniumJar,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    disableChecks: true,

    // https://github.com/protractor-cucumber-framework/protractor-cucumber-framework#uncaught-exceptions
    ignoreUncaughtExceptions: true,

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: [ 'features/**/*.feature' ],

    serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
        ]
    },

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register',
        tags:       '~@ignore'
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1280,900'
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        }
    }
};
