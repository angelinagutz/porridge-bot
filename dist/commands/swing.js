"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replies = ["Nimue", "Harvey's body", "The Entity"];
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
            var item = Math.floor(Math.random() * (replies.length - 1 + 1) + 1);
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and hits!** " + replies[item] + " has felt the force of your bat.");
        }
    }
}
exports.default = swing;
