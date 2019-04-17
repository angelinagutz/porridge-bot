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
        const papyrus = bot.emojis.get("459392554866180106");
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send("NYEH HEH HEH!\n" + `${papyrus} ${papyrus} ${papyrus} ${papyrus} ${papyrus} ${papyrus} ${papyrus} `);
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=ijrzwMLd218', { filter: 'audioonly' }));
            dispatcher.setVolume(0.20);
        }
        else {
            msgObject.channel.send("```NYEH HEH HEH!```\n" + papyrus);
        }
    }
}
exports.default = papyrus;
//567084797701390346
