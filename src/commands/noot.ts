import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

export default class noot implements IBotCommand {

    private readonly _command = "noot";

    help(): string {
        return "NOOT NOOT.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        //Send that shit

        var attachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/403171153377492994/569729459125747712/tenor.gif');

        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send(attachment);
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=Fs3BHRIyF2E', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.15);
        }

        else {
            msgObject.channel.send(attachment);
        }
        
        

    }
}