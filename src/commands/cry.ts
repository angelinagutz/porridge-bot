import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as YTDL from "ytdl-core";

export default class diddy implements IBotCommand {

    private readonly _command = "cry";

    help(): string {
        return "Porridge will do his cry again.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        //Send that shit

            if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
                var connection = msgObject.guild.me.voice.connection;
                var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=cXq-0HSG6KY', {filter: 'audioonly'} ));
                dispatcher.setVolume(0.25);
                msgObject.channel.send("```(ノ・∀・)ノ```");
            }

            else {
                msgObject.channel.send("https://www.youtube.com/watch?v=ahZnCMp1sKw");
            }
        }
    }