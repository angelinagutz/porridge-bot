"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class funny {
    constructor() {
        this._command = "funny";
    }
    help() {
        return "Posts a random image.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        var imageNum = Math.floor(Math.random() * (115 - 1 + 1) + 1);
        msgObject.channel.send({ files: ["../assets/funny/" + imageNum + ".png"] });
    }
}
exports.default = funny;
//
