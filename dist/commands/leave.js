"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class leave {
    constructor() {
        this._command = "leave";
    }
    help() {
        return "This command has the bot leave the voice channel";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Let us know it all went well
        if (msgObject.guild.voiceConnection) {
            msgObject.guild.voiceConnection.disconnect();
            msgObject.channel.send("```Bzzt! Porridge has left the voice channel! ＼(＾▽＾*)```");
        }
        else {
            msgObject.channel.send("```Bzzt! Porridge is currently not in a voice channel!```");
        }
    }
}
exports.default = leave;
