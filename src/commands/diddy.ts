import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from "ytdl-core";

export default class diddy implements IBotCommand {

    private readonly _command = "diddy";

    help(): string {
        return "Posts everyone's favourite rap song.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        //Send that shit

            if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
                var connection = msgObject.guild.me.voice.connection;
                msgObject.channel.send("```*Diddy Drop Rap plays in the distance*```" );
                var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=RFZzMbI-mSo', {filter: 'audioonly'} ));
                dispatcher.setVolume(0.10);
            }

            else {
            msgObject.channel.send("```(⌐■_■)```");
            msgObject.channel.send("https://www.youtube.com/watch?v=RFZzMbI-mSo");
            }

    }
}