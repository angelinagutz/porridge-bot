"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class rights {
    constructor() {
        this._command = "rights";
    }
    help() {
        return "Porridge says Trans rights.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("Trans rights!!! ٩(｡•ω•｡)و");
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/porridge.PNG`);
        msgObject.channel.send(attachment);
    }
}
exports.default = rights;
