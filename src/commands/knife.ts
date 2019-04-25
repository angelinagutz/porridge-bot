
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class knife implements IBotCommand {

    private readonly _command = "knife";

    help(): string {
        return "Porridge has a knife.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        msgObject.channel.send(String.fromCodePoint(128298) + String.fromCodePoint(128298));
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/knife_porridge.PNG`);
        msgObject.channel.send(attachment);

    }
}
//