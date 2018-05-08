'use strict';

let container = require('../container');

module.exports = class App {

    constructor() {

        this.images = container.data.images;
        this.creator = new container.classes.ImageCreator(process.argv[2]);
        this.resizor = new container.classes.ImageResizor(process.argv[3]);
        this.xml = new container.classes.CordovaConfig();

        this.run();
    }

    async run() {

        let path = `${container.conf.root}/output`;
        await container.tools.execSync(`rm -drf ${path} && mkdir ${path}`);
        await container.tools.execSync(`mkdir ${path}/res`);

        for (let platform in this.images) {

            this.xml.addPlatform(platform);

            path = `${container.conf.root}/output/res/${platform}`;
            await container.tools.execSync(`mkdir ${path}`);

            for (let type in this.images[platform]) {

                if (type !== 'icon' && type !== 'splash')
                    continue;

                path = `${container.conf.root}/output/res/${platform}/${type}`;
                await container.tools.execSync(`mkdir ${path}`);

                for (let entry of this.images[platform][type]) {

                    let imagePath = `${path}/${entry.filename}`;
                    let resPath = `res/${platform}/${type}/${entry.filename}`;

                    if (type === 'icon')
                        await this.resizor.resize(entry.size, imagePath);

                    else if (type === 'splash')
                        await this.creator.create(entry.size, imagePath);

                    let confSize = false;
                    if (entry.conf_size)
                        confSize = entry.size.split('x');

                    if (entry.conf_exclude !== true)
                        this.xml.addResource(platform, type, resPath, confSize, entry.conf_density);
                }
            }
        }

        this.xml.write(`${container.conf.root}/output/config.xml`);
    }
};