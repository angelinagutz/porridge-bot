import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

export default class terry implements IBotCommand {

    private readonly _command = "terry";

    help(): string {
        return "Gives a moment to remember Terry, the Tangela";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send("```May the road rise to meet you, Terry. (′︿‵｡)```");
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=rJTeVOOFMHM', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.15);
        }

        else {
        msgObject.channel.send("```May the road rise to meet you, Terry. (′︿‵｡)```");
        msgObject.channel.send("https://www.youtube.com/watch?v=rJTeVOOFMHM");
        }
    }
}