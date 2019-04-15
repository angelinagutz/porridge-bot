import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class d100 implements IBotCommand {

    private readonly _command = "d100";

    help(): string {
        return "Rolls a d100.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var result = Math.floor(Math.random() * 101);

        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");
        if (result == 69) {
            msgObject.channel.send("```Nice.```");
        }
        
    }
}