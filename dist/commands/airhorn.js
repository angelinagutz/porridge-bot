"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
class airhorn {
    constructor() {
        this._command = "airhorn";
    }
    help() {
        return "ERRRHHHH ERRRHHH ERRHHHERHHH";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Send that shit
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=OFr74zI1LBM', { filter: 'audioonly' }));
            dispatcher.setVolume(0.20);
            msgObject.channel.send("```Ｏ(≧∇≦)Ｏ```");
        }
        else {
            msgObject.channel.send("https://www.youtube.com/watch?v=OFr74zI1LBM");
        }
    }
}
exports.default = airhorn;
