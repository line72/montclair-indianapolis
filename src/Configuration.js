/* -*- Mode: rjsx -*- */

/*******************************************
 * Copyright (2018)
 *  Marcus Dillavou <line72@line72.net>
 *  http://line72.net
 *
 * Montclair:
 *  https://github.com/line72/montclair
 *  https://montclair.line72.net
 *
 * Licensed Under the GPLv3
 *******************************************/

import AvailtecParser from './AvailtecParser';

class Configuration {
    constructor() {
        // Indianapolis, IN
        this.center = [39.771396, -86.155625];

        this.agencies = [
            {
                name: 'Routes',
                parser: new AvailtecParser('https://realtime.indygo.net/InfoPoint/')
            }
        ];
    }
}

export default Configuration;
