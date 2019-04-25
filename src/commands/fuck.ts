import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

export default class fuck implements IBotCommand {

    private readonly _command = "fuck";

    help(): string {
        return "Lists all the commands.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=xcO_U9Jceps', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.10);
        }
        else {
        msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
        }

    }
}