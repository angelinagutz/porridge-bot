"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
class papyrus {
    constructor() {
        this._command = "papyrus";
    }
    help() {
        return "Posts everyone's favourite skeleton and his trousle of bones.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            msgObject.channel.send("NYEH HEH HEH!");
            var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=ijrzwMLd218', { filter: 'audioonly' }));
            dispatcher.setVolume(0.20);
        }
        else {
            msgObject.channel.send("```NYEH HEH HEH!```");
        }
    }
}
exports.default = papyrus;
//567084797701390346
