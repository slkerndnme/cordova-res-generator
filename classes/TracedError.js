'use strict';

let container = require('../container');

module.exports = class TracedError extends Error {

    constructor(error) {

        super();

        if (error instanceof TracedError) {
            this.catchedError = error;
            this.message = '';
        }
        else {
            this.catchedError = new Error;

            if (error !== undefined && error !== null)
                this.message = error.toString();
            else
                this.message = '';
        }

        this.mainStackMessage = null;
        this.completeStack = null;

        this.generateMainStackMessage();
        this.update();

        this.onError(this.toString());
    }

    onError(completeStack) {

    }

    generateMainStackMessage() {

        this.mainStackMessage = `${this.getCaller(this.stack)}: ${this.message}`;
    }

    update() {

        this.completeStack = '';

        if (typeof this.catchedError === 'object' && this.catchedError.completeStack !== undefined) {

            let stackMessage = '';
            if (this.catchedError.message !== undefined && this.catchedError.message != '')
                stackMessage = `: ${this.catchedError.message}`;

            this.completeStack = this.catchedError.completeStack + `\n${this.getLastCatchedErrorStackMessage()}${stackMessage}`;
        }
    }

    getCaller(stack) {

        return stack.split('\n')[1].trim().split(' ')[1];
    }

    getLastStackMessage(stack, fullVerbose) {

        if (fullVerbose)
            return stack.split('\n')[1];
        else
            return `    at ${this.getCaller(stack)}`;
    }

    getLastCatchedErrorStackMessage() {

        if (typeof this.catchedError !== 'object' || this.catchedError.completeStack === undefined)
            return '';

        let verbose = false;
        if (this.catchedError.completeStack === '')
            verbose = true;

        return this.getLastStackMessage(this.catchedError.stack, verbose);
    }

    toString() {

        return this.mainStackMessage + this.completeStack;
    }

    print() {

        container.log.printErrorStack(this.toString());
    }
};