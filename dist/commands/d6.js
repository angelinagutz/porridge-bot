"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class d6 {
    constructor() {
        this._command = "d6";
    }
    help() {
        return "Rolls a d6.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var result = Math.floor(Math.random() * 7);
        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
    }
}
exports.default = d6;
