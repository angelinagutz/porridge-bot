import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

export default class johnny implements IBotCommand {

    private readonly _command = "johnny";

    help(): string {
        return "Posts everyone's favourite cartoon ghost.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var attachment = new Discord.Attachment('https://i.imgur.com/6uysVsI.jpg');

        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send(msgObject.author.toString() + ", do you wish to know about our Lord and Saviour Johnny the Ghost?");
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=27SS8Pnmrok', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.20);
            msgObject.channel.send(attachment);
        }

        else {
            msgObject.channel.send(msgObject.author.toString() + ", do you wish to know about our Lord and Saviour Johnny the Ghost?");
            msgObject.channel.send(attachment);
        }
        
    }
}