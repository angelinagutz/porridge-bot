"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class d4 {
    constructor() {
        this._command = "d4";
    }
    help() {
        return "Rolls a d4.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var result = Math.floor(Math.random() * 5);
        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
    }
}
exports.default = d4;
