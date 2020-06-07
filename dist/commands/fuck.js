"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
class fuck {
    constructor() {
        this._command = "fuck";
    }
    help() {
        return "Lists all the commands.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
            var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=xcO_U9Jceps', { filter: 'audioonly' }));
            dispatcher.setVolume(0.10);
        }
        else {
            msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
        }
    }
}
exports.default = fuck;
