import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class at4wquest implements IBotCommand {

    private readonly _command = "at4wquest";

    help(): string {
        return "Bother Flame2Ashes about when the next update will be.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        bot.users.fetch('386268379234959360').then((user => {
            msgObject.channel.send("Hey " + user.toString() + ", when is the next AT4WQuest update?");
        }))
    }
}