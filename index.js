'use strict';

let container = require('./container');

container.conf = {logLevel: 1, root: __dirname};
container.log = new container.classes.Log();
container.log.init();
container.tools = new container.classes.Tools();

new container.classes.App();