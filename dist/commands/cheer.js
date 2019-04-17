"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cheer {
    constructor() {
        this._command = "cheer";
    }
    help() {
        return "ISends a positive message to the mentioned user.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        if (!msgObject.mentions.users.first()) {
            msgObject.channel.send("```Bzzt! Please mention a user you wish to cheer!```");
        }
        else {
            msgObject.delete();
            var mention = msgObject.mentions.users.first();
            msgObject.channel.send(`Bzzt! Hi ${mention.toString()}! ${msgObject.author.toString()} sent me to tell you that you are loved and deserve happiness!!! ♡〜٩(^▿^)۶〜♡`);
        }
    }
}
exports.default = cheer;
