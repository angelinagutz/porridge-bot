"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class flip {
    constructor() {
        this._command = "flip";
    }
    help() {
        return "Flips a coin.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var result = Math.floor(Math.random() * 3);
        if (result == 0) {
            result += 1;
        }
        if (result == 1) {
            msgObject.channel.send("```Bzzt! The coin landed on: Heads```");
        }
        if (result == 2) {
            msgObject.channel.send("```Bzzt! The coin landed on: Tails```");
        }
    }
}
exports.default = flip;
