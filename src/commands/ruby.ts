
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class ruby implements IBotCommand {

    private readonly _command = "ruby";

    help(): string {
        return "RISE";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var attachment = new Discord.Attachment('https://media.discordapp.net/attachments/403174681693126667/564216109386039307/00f7a0cc-fa68-4d43-89f4-37aa1e2bd811.gif');
        msgObject.channel.send(attachment);
    }
}
//