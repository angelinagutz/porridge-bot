"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
var maxNum = 130;
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
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/funny/${imageNum}.PNG`);
        msgObject.channel.send(attachment);
    }
}
exports.default = funny;
//
