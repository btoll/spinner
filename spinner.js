(() => {
    'use strict';
    // Alternate spinner text: '┤┘┴└├┌┬┐'

    let readline = require('readline'),
        stdout = process.stdout,
        i = 0,
        idx, spinner;

    spinner = {
        delay: 100,

        text: '|/-\\',

        start: function start(msg) {
            idx = setInterval(() => {
                readline.clearLine(stdout, 0);
                readline.cursorTo(stdout, 0);

                stdout.write(`${msg || ''} ${spinner.text[(i++) % spinner.text.length]}`);
            }, spinner.delay);
        },

        stop: () => {
            clearInterval(idx);
            idx = null;
        }
    };

    module.exports = spinner;
})();

