"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pet {
    constructor() {
        this._command = "pet";
    }
    help() {
        return "You pet Porridge.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("♥（ﾉ´∀`）");
        msgObject.channel.send(msgObject.author.toString() + " has petted Porridge!");
    }
}
exports.default = pet;
