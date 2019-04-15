import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class porygon implements IBotCommand {
    private readonly _command = "porygon";

    help(): string {
        return "Posts an image of porygon.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var attachment = new Discord.Attachment('https://cdn.bulbagarden.net/upload/6/6b/137Porygon.png');

        msgObject.channel.send("```Bzzt! It me!```");
        
        msgObject.channel.send(attachment);
    }
}