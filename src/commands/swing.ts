import * as Discord from "discord.js";
import {IBotCommand} from "../api";

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
            
            msgObject.channel.send(msgObject.author.toString() + " takes a swing....**and hits!** Nimue has just felt the force of your bat.");
            msgObject.react('711633238908731394');
    

    }
}
}