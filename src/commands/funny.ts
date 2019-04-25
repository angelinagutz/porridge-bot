
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class funny implements IBotCommand {

    private readonly _command = "funny";

    help(): string {
        return "Posts a random image.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var imageNum = Math.floor(Math.random() * (120 - 1 + 1) + 1);

        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/funny/${imageNum}.PNG`);
        msgObject.channel.send(attachment);

    }
}
//