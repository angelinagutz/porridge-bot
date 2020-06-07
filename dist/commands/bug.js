"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bug {
    constructor() {
        this._command = "bug";
    }
    help() {
        return "Informs the creator that a bug occurred.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        let message = msgObject.content.length;
        if (message < 6) { //No message attached to p!bug prefix
            msgObject.channel.send("```Bzzt! Please specify what the bug is so Porridge can send it to the creator!```");
        }
        else {
            let bugReport = msgObject.content.substr(6, msgObject.content.length); //Grabs everything after p!bug
            //Send report to me
            bot.users.fetch('386268379234959360').then((user => {
                user.send("Bzzt! User " + msgObject.author.toString() + " has found a problem with me: " + bugReport);
            }));
            //Send report to the help channel and respond to p!bug message
            var bugChannel = bot.channels.cache.get('567188138871750667');
            bugChannel.send("```Bzzt! A problem has been reported: " + bugReport + "```");
            msgObject.channel.send("```Bzzt! Report sent!! (*•̀ᴗ•́*)و ̑̑ \nA copy of your report has also been sent to the porridge-help channel!```");
        }
    }
}
exports.default = bug;
