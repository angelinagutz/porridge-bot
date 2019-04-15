"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class about {
    constructor() {
        this._command = "about";
    }
    help() {
        return "Describes the Porridge bot";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("```Bzzt! Hi there! I'm Porridge the Porygon! I'm a simple bot here for your entertainment!\nIn addition to some hidden goodies, I can roll dice and play audio! \nFor a quick list of commands, type in p!help.```");
    }
}
exports.default = about;
