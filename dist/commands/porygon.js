"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class porygon {
    constructor() {
        this._command = "porygon";
    }
    help() {
        return "Posts an image of porygon.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var attachment = new Discord.MessageAttachment('https://cdn.bulbagarden.net/upload/6/6b/137Porygon.png');
        msgObject.channel.send("```Bzzt! It me!```");
        msgObject.channel.send(attachment);
    }
}
exports.default = porygon;
