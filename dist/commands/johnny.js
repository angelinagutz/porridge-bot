"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var attachment;
class johnny {
    constructor() {
        this._command = "johnny";
    }
    help() {
        return "Posts everyone's favourite cartoon ghost.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (chance == 50) {
            attachment = new Discord.Attachment('https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/Johnny2.PNG');
        }
        else {
            attachment = new Discord.Attachment('https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/Johnny.PNG.png');
        }
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send(msgObject.author.toString() + ", do you wish to know about our Lord and Saviour Johnny the Ghost?");
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=27SS8Pnmrok', { filter: 'audioonly' }));
            dispatcher.setVolume(0.20);
            msgObject.channel.send(attachment);
        }
        else {
            msgObject.channel.send(msgObject.author.toString() + ", do you wish to know about our Lord and Saviour Johnny the Ghost?");
            msgObject.channel.send(attachment);
        }
    }
}
exports.default = johnny;
