import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class d12 implements IBotCommand {

    private readonly _command = "d12";

    help(): string {
        return "Rolls a d12.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var result = Math.floor(Math.random() * 13);

        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
        
    }
}