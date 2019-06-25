import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class jeffrey implements IBotCommand {

    private readonly _command = "jeffrey";

    help(): string {
        return "Jeffrey, do you have a Command, Jeffrey?";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        msgObject.channel.send("Jeffrey, would you like to watch a video, Jeffrey?");
        msgObject.channel.send("https://www.youtube.com/watch?v=XU4pPvHLIwc");
        
    }
}