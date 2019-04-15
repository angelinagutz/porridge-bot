"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class at4wquest {
    constructor() {
        this._command = "at4wquest";
    }
    help() {
        return "Bother Flame2Ashes about when the next update will be.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        bot.fetchUser('386268379234959360').then((user => {
            msgObject.channel.send("Hey " + user.toString() + ", when is the next AT4WQuest update?");
        }));
    }
}
exports.default = at4wquest;
