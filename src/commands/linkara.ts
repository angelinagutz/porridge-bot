import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class linkara implements IBotCommand {

    private readonly _command = "linkara";

    help(): string {
        return "Posts everyone's favourite comic reviewer.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

       
        
    }
}