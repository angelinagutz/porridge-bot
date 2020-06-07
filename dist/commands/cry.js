"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
class diddy {
    constructor() {
        this._command = "cry";
    }
    help() {
        return "Porridge will do his cry again.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Send that shit
        if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=cXq-0HSG6KY', { filter: 'audioonly' }));
            dispatcher.setVolume(0.25);
            msgObject.channel.send("```(ノ・∀・)ノ```");
        }
        else {
            msgObject.channel.send("https://www.youtube.com/watch?v=ahZnCMp1sKw");
        }
    }
}
exports.default = diddy;
