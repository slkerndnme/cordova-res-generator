'use strict';

let container = require('../container');

module.exports = class Log {

    constructor() {

        this.Reset = "\x1b[0m";
        this.Bright = "\x1b[1m";
        this.Dim = "\x1b[2m";
        this.Underscore = "\x1b[4m";
        this.Blink = "\x1b[5m";
        this.Reverse = "\x1b[7m";
        this.Hidden = "\x1b[8m";
        this.FgBlack = "\x1b[30m";
        this.FgRed = "\x1b[31m";
        this.FgGreen = "\x1b[32m";
        this.FgYellow = "\x1b[33m";
        this.FgBlue = "\x1b[34m";
        this.FgMagenta = "\x1b[35m";
        this.FgCyan = "\x1b[36m";
        this.FgWhite = "\x1b[37m";
        this.BgBlack = "\x1b[40m";
        this.BgRed = "\x1b[41m";
        this.BgGreen = "\x1b[42m";
        this.BgYellow = "\x1b[43m";
        this.BgBlue = "\x1b[44m";
        this.BgMagenta = "\x1b[45m";
        this.BgCyan = "\x1b[46m";
        this.BgWhite = "\x1b[47m";

        this.defaultLogLevel = 1;

        try {
            let logLevel = container.conf.logLevel;
            if (logLevel === undefined)
                throw "undefined";
            else
                this.logLevel = logLevel;
        } catch (error) {
            this.logLevel = this.defaultLogLevel;
            this.w(`logLevel is not configured : ${error}`);
        }
    }

    init() {

        this.log(` `);
        this.log(`${this.FgCyan}  Cordova Res Generator${this.Reset}`);
        this.log(` `);
    }

    getContextName(context) {

        if (context != null && context.constructor !== undefined)
            return context.constructor.name;
        else
            return '';
    }

    log(message) {

        if (this.logLevel >= 1)
            console.log(message);
    }

    d(context, message) {

        if (this.logLevel >= 1)
            console.log(`     [ ]  ${this.getContextName(context)}: ${message}`);
    }

    i(context, message) {

        if (this.logLevel >= 1)
            console.log(`${this.Bright}     [*]  ${this.getContextName(context)}: ${message}${this.Reset}`);
    }

    e(context, message) {

        if (this.logLevel >= 1)
            console.log(`${this.FgRed}${this.Bright}     [!]  ${this.getContextName(context)} Error: ${message}${this.Reset}`);
    }

    w(context, message) {

        if (this.logLevel >= 1)
            console.log(`${this.FgYellow}${this.Bright}     [!]  ${this.getContextName(context)} Warning: ${message}${this.Reset}`);
    }

    printErrorStack(stack) {

        stack.split('\n').forEach(function (line) {
            console.log(`${this.FgRed}${this.Bright}     [!]  ${line}${this.Reset}`);
        }.bind(this));
    }
};