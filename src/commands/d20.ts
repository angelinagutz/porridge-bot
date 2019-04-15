import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class d20 implements IBotCommand {

    private readonly _command = "d20";

    help(): string {
        return "Rolls a d20.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var result = Math.floor(Math.random() * 21);

        if (result == 0) {
            result += 1;
        }
        msgObject.channel.send("```Bzzt! Your roll is: " + result + "```");

        if (result == 20) {
            msgObject.channel.send("```YOU GOT A NAT 20!!!!! (ﾉ^ヮ^)ﾉ*:・ﾟ✧```");
        }
        else if (result == 1) {
            msgObject.channel.send("```Yikes. You got a nat 1. (,,꒪꒫꒪,,)```");
        }
        
    }
}