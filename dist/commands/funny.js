"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class funny {
    constructor() {
        this._command = "funny";
    }
    help() {
        return "Posts a random image.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var imageNum = Math.floor(Math.random() * (115 - 1 + 1) + 1);
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/funny/${imageNum}.PNG`);
        msgObject.channel.send(attachment);
    }
}
exports.default = funny;
//
