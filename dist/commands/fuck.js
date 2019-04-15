"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
    }
}
exports.default = fuck;
