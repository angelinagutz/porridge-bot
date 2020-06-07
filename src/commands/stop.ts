import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class stop implements IBotCommand {

    private readonly _command = "stop";

    help(): string {
        return "Stops the current playback.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
      
        if (msgObject.member.voice && msgObject.guild.me.voice.connection) {
            var connection = msgObject.guild.me.voice.connection;
            var dispatcher = connection.dispatcher;
            if (dispatcher) {
            dispatcher.destroy();
            msgObject.channel.send("```Bzzt! Porridge has stopped playback.```");
        }

        else {
            msgObject.channel.send("```Bzzt! Nothing is currently playing.```");
        }
        
    }


    }
}