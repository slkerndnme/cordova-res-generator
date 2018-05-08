'use strict';

let container = require('../container');

module.exports = class ImageCreator {

    constructor(color) {

        this.color = color;
    }

    async create(size, path) {

        await container.tools.execSync(`convert -size ${size} xc:"${this.color}" ${path}`);

        container.log.i(this, `Generated: ${path}`);
    }
};