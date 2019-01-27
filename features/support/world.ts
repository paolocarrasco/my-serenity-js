import {serenity} from 'serenity-js';

import {protractor} from 'protractor';
import {Actor, BrowseTheWeb, Cast} from 'serenity-js/protractor';

export = function() {

    this.setDefaultTimeout(60 * 1000);

    this.World = function() {
        // Any properties assigned to `this` will be available to step definitions:
        this.stage = serenity.callToStageFor(new Seereners());
    };
};

class Seereners implements Cast {
    actor(name: string): Actor {
        return Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser));
    }
}
