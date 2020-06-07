import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from "ytdl-core";

export default class join implements IBotCommand {

    private readonly _command = "join";

    help(): string {
        return "This command has the bot join the voice channel";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
   async runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): Promise<void> {
        
        //Let us know it all went well
        if (msgObject.member.voice.channel && !msgObject.guild.me.voice.connection)  {
                msgObject.member.voice.channel.join()
                .then(connection => {msgObject.channel.send("```Bzzt! Porridge has joined your voice channel! (*＾▽＾)／```").catch(console.log)
                var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=cXq-0HSG6KY', {filter: 'audioonly'}));
                dispatcher.setVolume(0.5);
        });
    }
        else if (!msgObject.member.voice.channel) { //User is not in a voice channel
            msgObject.channel.send("```Bzzt! You are currently not in a voice channel. Please enter the voice channel you want Porridge to join!```");
        }

        else if (msgObject.guild.voice.connection) { //Porridge is already in a voice channel
            msgObject.channel.send("```Bzzt! Porridge is already in a voice channel!```");
        }
        
        
    }
}