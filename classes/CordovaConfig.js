'use strict';

let container = require('../container');

module.exports = class CordovaConfig {

    constructor() {

        this.platforms = {};
    }

    platformExists(name) {

        return this.platforms[name] !== undefined;
    }

    addPlatform(name) {

        this.platforms[name] = [];
    }

    addResource(platformName, type, imagePath, confSize, density) {

        if (!this.platformExists(platformName)) {
            let tracedError = new container.classes.TracedError('Platform does not exists.');
            return tracedError.print();
        }

        if (type !== "splash" && type !== "icon") {
            let tracedError = new container.classes.TracedError('Resource type unrecognised.');
            return tracedError.print();
        }

        if (!container.tools.fs.existsSync('output/' + imagePath)) {
            let tracedError = new container.classes.TracedError('Resource not found');
            return tracedError.print();
        }

        let entry = `<${type} src="${imagePath}"`;

        if (typeof confSize === 'object')
            entry += ` width="${confSize[0]}" height="${confSize[1]}"`;
        if (typeof density === 'string')
            entry += ` density="${density}"`;

        entry += ` />`;

        this.platforms[platformName].push(entry);
    }

    write(path) {

        let xml = `<?xml version='1.0' encoding='utf-8'?>`;

        for (let platform in this.platforms) {

            xml += `\n\n<platform name="${platform}">`;

            for (let entry of this.platforms[platform])
                xml += `\n    ${entry}`;

            xml += `\n</platform>`;
        }

        container.tools.fs.writeFileSync(path, xml);

        console.log(' ');
        console.log(xml);
        console.log(' ');

        container.log.i(this, `config.xml writed: ${path}`);
    }
};