import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import { stringify } from "querystring";

export default class about implements IBotCommand {

    private readonly _command = "creator";

    help(): string {
        return "Send love to the bot's creator";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
       
        bot.fetchUser('386268379234959360').then((user => {
           msgObject.channel.send("Bzzt! Sending " + String.fromCodePoint(10084) + " to the bot's creator, "+ user.toString() + "! (´∀｀)♡");
       }));
     
    }
}