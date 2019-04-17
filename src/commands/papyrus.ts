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
        
        const papyrus = bot.emojis.get("459392554866180106"); 
        if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
            var connection = msgObject.guild.voiceConnection;
            msgObject.channel.send("NYEH HEH HEH!\n" + `${papyrus} ${papyrus} ${papyrus} ${papyrus} ${papyrus} ${papyrus} ${papyrus} `);
            var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=ijrzwMLd218', {filter: 'audioonly'} ));
            dispatcher.setVolume(0.20);
        }

        else {
            msgObject.channel.send("```NYEH HEH HEH!```\n" + papyrus);
        }
    }
}


//567084797701390346