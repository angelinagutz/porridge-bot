import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from "ytdl-core";

export default class play implements IBotCommand {

    private readonly _command = "play";


    help(): string {
        return "This command has the bot join the voice channel and play music.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }

  async runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): Promise<void> {

        var getString = msgObject.content.split(" ");

        var link = getString[1];
        var validate = YTDL.validateURL(link);
        msgObject.delete();
        
        if (!getString[1] || !validate) {
            msgObject.channel.send("**```Bzzt! Oops! Please put in a valid YouTube URL!```**");
        }
        else {

        var vidInfo = await YTDL.getInfo(link)
        var title = vidInfo.videoDetails.title;
        var author = vidInfo.videoDetails.author.name;

            if (msgObject.member.voice.channel && !msgObject.guild.me.voice.connection)  {
                    msgObject.member.voiceChannel.join()
                    .then(connection => {msgObject.channel.send("```Bzzt! Porridge has joined your voice channel! (*＾▽＾)／```").catch(console.log);
                    msgObject.channel.send("```" + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) + " NOW PLAYING: " + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) + "\n\n" + `${title} from ${author} (URL: ` + link + ")```");
                    var dispatcher = connection.play(YTDL(link, {filter: 'audioonly'}));
                    dispatcher.setVolume(0.15);
            });
            
            }
    
            else if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
                var connection = msgObject.guild.me.voice.connection;
                msgObject.channel.send("```" + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) + " NOW PLAYING: " + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) +  "\n\n" + `${title} from ${author} (URL: ` + link + ")```");
                var dispatcher = connection.play(YTDL(link, {filter: 'audioonly'} ));
                dispatcher.setVolume(0.15);
                
            }
        
        }
                if (!msgObject.member.voice.channel) {
                    msgObject.channel.send("```Bzzt! You are currently not in a voice channel. Please enter the voice channel you want Porridge to join!```");
                }

                
            }
            

    
}
