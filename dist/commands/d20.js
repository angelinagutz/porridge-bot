"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class d20 {
    constructor() {
        this._command = "d20";
    }
    help() {
        return "Rolls a d20.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var result = Math.floor(Math.random() * 21);
        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
        if (result == 20) {
            msgObject.channel.send("```YOU GOT A NAT 20!!!!! (ﾉ^ヮ^)ﾉ*:・ﾟ✧```");
        }
        else if (result == 1) {
            msgObject.channel.send("```Yikes. You got a nat 1. (,,꒪꒫꒪,,)```");
        }
    }
}
exports.default = d20;
