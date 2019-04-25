"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class knife {
    constructor() {
        this._command = "knife";
    }
    help() {
        return "Porridge has a knife.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send(String.fromCodePoint(128298) + String.fromCodePoint(128298));
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/knife_porridge.png`);
        msgObject.channel.send(attachment);
    }
}
exports.default = knife;
//
