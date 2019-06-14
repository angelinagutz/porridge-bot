import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

export default class harvester implements IBotCommand {

    private readonly _command = "harvester";

    help(): string {
        return "I've got a brand new combine harvester and I'll give you the key.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var attachment = new Discord.Attachment('https://66.media.tumblr.com/77ab5b60b58b20ffb71b114f90348793/tumblr_inline_pt063uFPCC1r41xnq_1280.gif');

        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=btEpF334Rtc', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.20);
            msgObject.channel.send(attachment);
        }

        else {
            msgObject.channel.send(attachment);
        }
        
    }
}