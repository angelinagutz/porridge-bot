"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class moonball {
    constructor() {
        this._command = "moonball";
    }
    help() {
        return "Moonball.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var members = msgObject.guild.members.cache.random().user.username;
        msgObject.channel.send("MOONBALL! " + msgObject.author.toString() + "'s moonball has hit " + members + "!");
    }
}
exports.default = moonball;
