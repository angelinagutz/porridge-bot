import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class d10 implements IBotCommand {

    private readonly _command = "d10";

    help(): string {
        return "Rolls a d10.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var result = Math.floor(Math.random() * 11);

        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
        
    }
}