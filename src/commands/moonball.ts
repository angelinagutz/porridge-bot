
import * as Discord from "discord.js";
import {IBotCommand} from "../api";



export default class moonball implements IBotCommand {

    private readonly _command = "moonball";

    help(): string {
        return "Moonball.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var members = msgObject.guild.members.cache.random().user.username;

        msgObject.channel.send("MOONBALL! " + msgObject.author.toString() + " threw a moonball and it hit " + members + "!");
        

    }
}
