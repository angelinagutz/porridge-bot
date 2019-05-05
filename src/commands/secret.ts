import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class secret implements IBotCommand {

    private readonly _command = "secret";

    help(): string {
        return "Porridge tells you a secret. The message deletes after one minute.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

      //Gather a list of secrets

    }
}