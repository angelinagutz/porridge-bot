"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class about {
    constructor() {
        this._command = "creator";
    }
    help() {
        return "Send love to the bot's creator";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        bot.users.fetch('386268379234959360').then((user => {
            msgObject.channel.send("Bzzt! Sending " + String.fromCodePoint(10084) + " to the bot's creator, " + user.toString() + "! (´∀｀)♡");
        }));
    }
}
exports.default = about;
