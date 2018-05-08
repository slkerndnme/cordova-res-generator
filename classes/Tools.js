'use strict';

let container = require('../container');

module.exports = class Tools {

    constructor() {

        // Native Node.js packages
        this.fs = require('fs');
        this.exec = require('child_process').exec;
        this.spawn = require('child_process').spawn;
    }

    async execSync(cmd) {

        try {

            return await new Promise(function (resolve, reject) {

                this.exec(cmd, function (error, output) {
                    if (error === null)
                        resolve(output.replace(/^\s+|\s+$/g, ""));
                    else
                        reject(error.toString().replace(/^\s+|\s+$/g, ""));
                });

            }.bind(this));

        } catch (error) {

            throw new container.classes.TracedError(error);
        }
    }

    async getFile(path) {

        try {

            return await
                new Promise(function (resolve, reject) {
                    this.fs.readFile(path, function read(error, data) {
                        if (error)
                            reject(error);
                        else
                            resolve(data);
                    });
                }.bind(this));

        } catch (error) {

            throw new container.classes.TracedError(error);
        }
    }
};