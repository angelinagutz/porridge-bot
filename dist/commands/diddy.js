"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
class diddy {
    constructor() {
        this._command = "diddy";
    }
    help() {
        return "Posts everyone's favourite rap song.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Send that shit
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send("```*Diddy Drop Rap plays in the distance*```");
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=RFZzMbI-mSo', { filter: 'audioonly' }));
            dispatcher.setVolume(0.10);
        }
        else {
            msgObject.channel.send("```(⌐■_■)```");
            msgObject.channel.send("https://www.youtube.com/watch?v=RFZzMbI-mSo");
        }
    }
}
exports.default = diddy;
