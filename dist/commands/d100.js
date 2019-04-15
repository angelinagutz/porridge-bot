"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class d100 {
    constructor() {
        this._command = "d100";
    }
    help() {
        return "Rolls a d100.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var result = Math.floor(Math.random() * 101);
        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
        if (result == 69) {
            msgObject.channel.send("```Nice.```");
        }
    }
}
exports.default = d100;
