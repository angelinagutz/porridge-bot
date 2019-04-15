import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from "ytdl-core";

export default class airhorn implements IBotCommand {

    private readonly _command = "airhorn";

    help(): string {
        return "ERRRHHHH ERRRHHH ERRHHHERHHH";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        //Send that shit

            if (msgObject.member.voiceChannel && msgObject.guild.voiceConnection) {
                var connection = msgObject.guild.voiceConnection;
                var dispatcher = connection.playStream(YTDL('https://www.youtube.com/watch?v=OFr74zI1LBM', {filter: 'audioonly'} ));
                dispatcher.setVolume(0.20);
                msgObject.channel.send("```Ｏ(≧∇≦)Ｏ```");
            }

            else {
                msgObject.channel.send("https://www.youtube.com/watch?v=OFr74zI1LBM");
            }
        }
    }