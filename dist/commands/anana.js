"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
class anana {
    constructor() {
        this._command = "anana";
    }
    help() {
        return "Posts everyone's favourite French pinapple.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Send that shit
        var attachment = new Discord.Attachment('https://i.imgur.com/zI0hjKL.gif');
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send(attachment);
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=15M-wYefxHU', { filter: 'audioonly' }));
            dispatcher.setVolume(0.15);
        }
        else {
            msgObject.channel.send(attachment);
        }
    }
}
exports.default = anana;
