"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class rights {
    constructor() {
        this._command = "rights";
    }
    help() {
        return "Porridge says Trans rights.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("Trans rights!!! ٩(｡•ω•｡)و");
    }
}
exports.default = rights;
