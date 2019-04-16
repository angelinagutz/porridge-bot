
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class funny implements IBotCommand {

    private readonly _command = "funny";

    help(): string {
        return "Posts a random image.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        var imageNum = Math.floor(Math.random() * (115 - 1 + 1) + 1);

        msgObject.channel.send ({files: ["../assets/funny/" + imageNum + ".png"]});

    }
}
//