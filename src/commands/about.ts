import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class about implements IBotCommand {

    private readonly _command = "about";

    help(): string {
        return "Describes the Porridge bot";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        msgObject.channel.send("```Bzzt! Hi there! I'm Porridge the Porygon! I'm a simple bot here for your entertainment!\nIn addition to some hidden goodies, I can roll dice and play audio! \nFor a quick list of commands, type in p!help.```");
     
    }
}