import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class help implements IBotCommand {

    private readonly _command = "help";

    help(): string {
        return "Helpful links for the bot";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {
        msgObject.channel.send("Bzzt! Here's a quick list of useful commands!\n\n**p!bug**: Used to report bugs that occur with the bot. Make sure to include your report with the command.\n\n**p!join**: Porridge will join your voice channel. (You must be in a voice channel beforehand, and Porridge must not be currently in another voice channel.) When Porridge joins, he will greet you!\n\n**p!leave**: Porridge will leave the voice channel he is currently in.\n\n**p!play [YouTube URL]**: Porridge will play your provided YouTube link! (Note: You must be in a voice channel to use this command. Only the audio will play.)\n\n**p!stop**: Porridge will stop his current playback.\n\n**p!list**: Posts a full list of Porridge's commands.");
     
    }
}