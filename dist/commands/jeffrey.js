"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class jeffrey {
    constructor() {
        this._command = "jeffrey";
    }
    help() {
        return "Jeffrey, do you have a Command, Jeffrey?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("Jeffrey, would you like to watch a video, Jeffrey?");
        msgObject.channel.send("https://www.youtube.com/watch?v=XU4pPvHLIwc");
    }
}
exports.default = jeffrey;
