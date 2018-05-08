'use strict';

let container = require('../container');

module.exports = class ImageResizor {

    constructor(base) {

        if (container.tools.fs.existsSync(base))
            this.base = base;
        else {
            let tracedError = new container.classes.TracedError('Base image not found');
            tracedError.print();
            process.exit();
        }
    }

    async resize(size, path) {

        await container.tools.execSync(`convert ${this.base} -resize ${size} ${path}`);

        container.log.i(this, `Generated: ${path}`);
    }
};