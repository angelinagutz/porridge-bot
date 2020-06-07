import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

var attachment;

export default class johnny implements IBotCommand {

    private readonly _command = "johnny";

    help(): string {
        return "Posts everyone's favourite cartoon ghost.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (chance == 50) {
            attachment = new Discord.MessageAttachment('https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/Johnny2.PNG')    
        }
        else {
        attachment = new Discord.MessageAttachment('https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/Johnny.PNG.png');
        }
        if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            msgObject.channel.send(msgObject.author.toString() + ", do you wish to know about our Lord and Saviour Johnny the Ghost?");
            var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=27SS8Pnmrok', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.20);
            msgObject.channel.send(attachment);
        }

        else {
            msgObject.channel.send(msgObject.author.toString() + ", do you wish to know about our Lord and Saviour Johnny the Ghost?");
            msgObject.channel.send(attachment);
        }
        
    }
}