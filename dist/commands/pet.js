"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pet {
    constructor() {
        this._command = "pet";
    }
    help() {
        return "Pets Porridge the Porygon";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send(msgObject.author.toString() + " has petted Porridge! Porridge has now been pet");
    }
}
exports.default = pet;
