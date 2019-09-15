"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class linkara {
    constructor() {
        this._command = "linkara";
    }
    help() {
        return "Posts everyone's favourite comic reviewer.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
    }
}
exports.default = linkara;
