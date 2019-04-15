import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from "ytdl-core";
import { on } from "cluster";

export default class leave implements IBotCommand {

    private readonly _command = "leave";

    help(): string {
        return "This command has the bot leave the voice channel";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        
        //Let us know it all went well
        if (msgObject.guild.voiceConnection) {
            msgObject.guild.voiceConnection.disconnect();
            msgObject.channel.send("```Bzzt! Porridge has left the voice channel! ＼(＾▽＾*)```");
        }

        else {
            msgObject.channel.send("```Bzzt! Porridge is currently not in a voice channel!```");
        }
    
    }
}