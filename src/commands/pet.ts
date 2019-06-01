import * as Discord from "discord.js";
import {IBotCommand} from "../api";

var petNum = 22;

export default class pet implements IBotCommand {

    private readonly _command = "pet";

    help(): string {
        return "You pet Porridge.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        petNum++;
        msgObject.channel.send("♥（ﾉ´∀`）");
        msgObject.channel.send(msgObject.author.toString() + " has petted Porridge! Porridge has been pet " + petNum + " times!");
    

    }
}