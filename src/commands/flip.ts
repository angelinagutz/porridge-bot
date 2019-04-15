import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class flip implements IBotCommand {

    private readonly _command = "flip";

    help(): string {
        return "Flips a coin.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var result = Math.floor(Math.random() * 3);

        if (result == 0) {
            result += 1;
        }
        if (result == 1) {
            msgObject.channel.send("```Bzzt! The coin landed on: Heads```");
        }
        if (result == 2) {
            msgObject.channel.send("```Bzzt! The coin landed on: Tails```");
        }
        
    }
}