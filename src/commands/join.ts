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
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        
        //Let us know it all went well
        if (msgObject.member.voiceChannel && !msgObject.guild.voiceConnection)  {
                msgObject.member.voiceChannel.join()
                .then(connection => {msgObject.channel.send("```Bzzt! Porridge has joined your voice channel! (*＾▽＾)／```").catch(console.log)
                var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=cXq-0HSG6KY', {filter: 'audioonly'}));
                dispatcher.setVolume(0.5);
        });
    }
        else if (!msgObject.member.voiceChannel) { //User is not in a voice channel
            msgObject.channel.send("```Bzzt! You are currently not in a voice channel. Please enter the voice channel you want Porridge to join!```");
        }

        else{ //User is already in a voice channel
            msgObject.channel.send("```Bzzt! Porridge is already in a voice channel!```");
        }
        
        
    }
}