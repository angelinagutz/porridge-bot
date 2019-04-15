"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class nash {
    constructor() {
        this._command = "nash";
    }
    help() {
        return "Nash Springs into Action.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var attachment = new Discord.Attachment('https://i.imgur.com/O6S7Mlr.jpg');
        msgObject.channel.send(attachment);
    }
}
exports.default = nash;
//
