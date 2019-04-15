import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

export default class anana implements IBotCommand {

    private readonly _command = "anana";

    help(): string {
        return "Posts everyone's favourite French pinapple.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        //Send that shit

        var attachment = new Discord.Attachment('https://i.imgur.com/zI0hjKL.gif');

        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send(attachment);
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=15M-wYefxHU', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.15);
        }

        else {
            msgObject.channel.send(attachment);
        }
        
        

    }
}