"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class garrus {
    constructor() {
        this._command = "garrus";
    }
    help() {
        return "I'm Garrus Vakarian and this is my favourite command on the Porridge bot!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var num = Math.floor((Math.random() * 2 + 1) - 1);
        if (num == 0) {
            msgObject.channel.send("Can it wait for a bit? I'm in the middle of some calibrations.");
        }
        else {
            msgObject.channel.send("Remember to stay hydrated.");
        }
    }
}
exports.default = garrus;
