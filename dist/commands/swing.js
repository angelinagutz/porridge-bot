"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class swing {
    constructor() {
        this._command = "swing";
    }
    help() {
        return "You swing a bat.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        const nimue = bot.emojis.get("711633238908731394");
        msgObject.channel.send("(ʃƪ¬‿¬)");
        var chance = Math.floor(Math.random() * 3);
        if (chance == 0) {
            chance += 1;
        }
        if (chance == 1) {
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and misses**!");
        }
        if (chance == 2) {
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and hits!**" + `${nimue} Nimue has just felt the force of your bat.`);
        }
    }
}
exports.default = swing;
