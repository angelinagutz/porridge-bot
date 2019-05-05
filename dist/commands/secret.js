"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class secret {
    constructor() {
        this._command = "secret";
    }
    help() {
        return "Porridge tells you a secret. The message deletes after one minute.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Gather a list of secrets
    }
}
exports.default = secret;
