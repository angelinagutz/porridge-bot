
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class garrus implements IBotCommand {

    private readonly _command = "garrus";

    help(): string {
        return "I'm Garrus Vakarian and this is my favourite command on the Porridge bot!";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var num = Math.floor((Math.random() * 2 + 1) - 1);

        if (num == 0) {

        msgObject.channel.send("Can it wait for a bit? I'm in the middle of some calibrations.");

        }

        else {

        msgObject.channel.send("Remember to stay hydrated.");

            }

       
    }
}
