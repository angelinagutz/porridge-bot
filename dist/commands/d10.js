"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class d10 {
    constructor() {
        this._command = "d10";
    }
    help() {
        return "Rolls a d10.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var result = Math.floor(Math.random() * 11);
        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
    }
}
exports.default = d10;
