"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
class terry {
    constructor() {
        this._command = "terry";
    }
    help() {
        return "Gives a moment to remember Terry, the Tangela";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send("```May the road rise to meet you, Terry. (′︿‵｡)```");
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=rJTeVOOFMHM', { filter: 'audioonly' }));
            dispatcher.setVolume(0.15);
        }
        else {
            msgObject.channel.send("```May the road rise to meet you, Terry. (′︿‵｡)```");
            msgObject.channel.send("https://www.youtube.com/watch?v=rJTeVOOFMHM");
        }
    }
}
exports.default = terry;
