
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class nash implements IBotCommand {

    private readonly _command = "nash";

    help(): string {
        return "Nash Springs into Action.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var attachment = new Discord.Attachment('https://i.imgur.com/O6S7Mlr.jpg');
        msgObject.channel.send(attachment);
    }
}
//