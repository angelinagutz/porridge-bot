"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
var maxNum = 40;
class linkara {
    constructor() {
        this._command = "linkara";
    }
    help() {
        return "Posts everyone's favourite comic reviewer.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var getFileName = msgObject.content.split(" ");
        if (!getFileName[1]) {
            var imageNum = Math.floor(Math.random() * (maxNum - 1 + 1) + 1);
        }
        else {
            if (Number(getFileName[1]) > maxNum) {
                msgObject.channel.send("```Sorry, there's no image with that number. Have a random image instead!```");
                imageNum = Math.floor(Math.random() * (maxNum - 1 + 1) + 1);
            }
            else {
                imageNum = Number(getFileName[1]);
            }
        }
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/linkara/${imageNum}.png`);
        msgObject.channel.send(attachment);
    }
}
exports.default = linkara;
