"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class help {
    constructor() {
        this._command = "rights";
    }
    help() {
        return "Porridge says trans rights, as he should.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("```Bzzt! Porridge says: trans rights!!!! ");
    }
}
exports.default = help;
