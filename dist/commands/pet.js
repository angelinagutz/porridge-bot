"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var petNum = 8;
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
        petNum++;
        msgObject.channel.send("♥（ﾉ´∀`）");
        msgObject.channel.send(msgObject.author.toString() + " has petted Porridge! Porridge has been pet " + petNum + " times!");
    }
}
exports.default = pet;
