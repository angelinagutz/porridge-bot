import * as Discord from "discord.js";
import {IBotCommand} from "../api";

var replies = ["Nimue", "Harvey's body", "The Entity"]

export default class swing implements IBotCommand {

    private readonly _command = "swing";

    help(): string {
        return "You swing a bat.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        msgObject.channel.send("(ʃƪ¬‿¬)");
        var chance = Math.floor(Math.random() * 3);
        if (chance == 0) {
            chance += 1;
        }
        
        if (chance == 1) {
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and misses**!");
        }
        
        if (chance == 2) {
            var item = Math.floor(Math.random() * replies.length);
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and hits!** " + replies[item] + " has felt the force of your bat.");
    

    }
}
}