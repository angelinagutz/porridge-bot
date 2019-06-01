"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var batNum = 16;
class swing {
    constructor() {
        this._command = "swing";
    }
    help() {
        return "You swing a bat.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("(ʃƪ¬‿¬)");
        var chance = Math.floor(Math.random() * 3);
        if (chance == 0) {
            chance += 1;
        }
        if (chance == 1) {
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and misses**!");
        }
        if (chance == 2) {
            batNum++;
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and hits**! Nimue has been hit with a bat " + batNum + " times.");
        }
    }
}
exports.default = swing;
