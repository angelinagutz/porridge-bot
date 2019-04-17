import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class cheer implements IBotCommand {

    private readonly _command = "cheer";

    help(): string {
        return "ISends a positive message to the mentioned user.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        if(!msgObject.mentions.users.first()) {
            msgObject.channel.send("```Bzzt! Please mention a user you wish to cheer!```");
        }
        else {
            msgObject.delete();
            var mention = msgObject.mentions.users.first();
            msgObject.channel.send(`Bzzt! Hi ${mention.toString()}! ${msgObject.author.toString()} sent me to tell you that you are loved and deserve happiness!!! ♡〜٩(^▿^)۶〜♡`);
        }
    
    }
}