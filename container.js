'use strict';

let fs = require("fs");
let path = require('path');

function exportDirTo(exportedProperty, directory, fileExtension) {

    fs.readdirSync(directory).forEach(function (file) {

        let filePath = path.resolve(directory, file);

        if (fs.lstatSync(filePath).isDirectory())
            exportDirTo(exportedProperty, filePath, fileExtension);
        else if (path.extname(file) === fileExtension) {
            let name = file.replace(fileExtension, '').replace('.', '');

            if (exports[exportedProperty] === undefined)
                exports[exportedProperty] = {};

            exports[exportedProperty][name] = require(filePath);
        }
    });
}

exportDirTo(`classes`, `${__dirname}/classes`, `.js`);
exportDirTo(`data`, `${__dirname}/data`, `.js`);