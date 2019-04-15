import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class fuck implements IBotCommand {

    private readonly _command = "fuck";

    help(): string {
        return "Lists all the commands.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
    

    }
}