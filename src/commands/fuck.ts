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

        if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
            var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=xcO_U9Jceps', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.10);
        }
        else {
        msgObject.channel.send("```Porridge says: Fuck!!!!!!! （‐＾▽＾‐）```");
        }

    }
}