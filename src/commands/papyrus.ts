import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from 'ytdl-core';

export default class papyrus implements IBotCommand {

    private readonly _command = "papyrus";

    help(): string {
        return "Posts everyone's favourite skeleton and his trousle of bones.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
    
        if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            msgObject.channel.send("NYEH HEH HEH!");
            var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=ijrzwMLd218', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.20);
        }

        else {
            msgObject.channel.send("```NYEH HEH HEH!```");
        }
    }
}


//567084797701390346