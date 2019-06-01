import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class rights implements IBotCommand {

    private readonly _command = "rights";

    help(): string {
        return "Porridge says Trans rights.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        msgObject.channel.send("Trans rights!!! ٩(｡•ω•｡)و");
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/porridge.png`);
        msgObject.channel.send(attachment);
    

    }
}