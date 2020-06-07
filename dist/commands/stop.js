"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class stop {
    constructor() {
        this._command = "stop";
    }
    help() {
        return "Stops the current playback.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        if (msgObject.member.voice && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            var dispatcher = connection.dispatcher;
            if (dispatcher) {
                dispatcher.destroy();
                msgObject.channel.send("```Bzzt! Porridge has stopped playback.```");
            }
            else {
                msgObject.channel.send("```Bzzt! Nothing is currently playing.```");
            }
        }
    }
}
exports.default = stop;
