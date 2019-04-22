"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
class noot {
    constructor() {
        this._command = "noot";
    }
    help() {
        return "NOOT NOOT.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Send that shit
        var attachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/403171153377492994/569729459125747712/tenor.gif');
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send(attachment);
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=Fs3BHRIyF2E', { filter: 'audioonly' }));
            dispatcher.setVolume(0.15);
        }
        else {
            msgObject.channel.send(attachment);
        }
    }
}
exports.default = noot;
