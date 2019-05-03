"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "Helpful links for the bot";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("Bzzt! Here's a quick list of useful commands!\n\n**p!bug**: Used to report bugs that occur with the bot. Make sure to include your report with the command.\n\n**p!join**: Porridge will join your voice channel. (You must be in a voice channel beforehand, and Porridge must not be currently in another voice channel.) When Porridge joins, he will greet you!\n\n**p!leave**: Porridge will leave the voice channel he is currently in.\n\n**p!play [YouTube URL]**: Porridge will play your provided YouTube link! (Note: You must be in a voice channel to use this command. Only the audio will play.)\n\n**p!stop**: Porridge will stop his current playback.\n\n**p!roll [XdY]**: Roll any number (up to 100) of any sided (up to 100) die. (The default is 1d6.)\n\nFor a full list of commands, refer to the pinned messages in the porridge-help channel.");
    }
}
exports.default = help;
