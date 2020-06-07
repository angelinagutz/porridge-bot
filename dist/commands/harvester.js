"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
class harvester {
    constructor() {
        this._command = "harvester";
    }
    help() {
        return "I've got a brand new combine harvester and I'll give you the key.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var attachment = new Discord.MessageAttachment('https://66.media.tumblr.com/77ab5b60b58b20ffb71b114f90348793/tumblr_inline_pt063uFPCC1r41xnq_1280.gif');
        if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=btEpF334Rtc', { filter: 'audioonly' }));
            dispatcher.setVolume(0.20);
            msgObject.channel.send(attachment);
        }
        else {
            msgObject.channel.send(attachment);
        }
    }
}
exports.default = harvester;
