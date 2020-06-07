"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class ruby {
    constructor() {
        this._command = "ruby";
    }
    help() {
        return "RISE";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var attachment = new Discord.MessageAttachment('https://media.discordapp.net/attachments/403174681693126667/564216109386039307/00f7a0cc-fa68-4d43-89f4-37aa1e2bd811.gif');
        msgObject.channel.send(attachment);
    }
}
exports.default = ruby;
//
