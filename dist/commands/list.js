"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class help {
    constructor() {
        this._command = "list";
    }
    help() {
        return "Lists all the commands.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        msgObject.channel.send("Bzzt! Hi! Here's the list of commands you can use with Porridge!\n\n**GENERAL COMMANDS:**\n\n**p!about**: Gives a general description of the bot.\n**p!help**: Posts the most useful commands for your convenience.\n**p!bug**: Used to report bugs that occur in the bot. Please include your report with the command.\n\n**VOICE CHANNEL RELATED COMMANDS:**\n\n**p!join**: Porridge will join your voice channel. (You must be in a voice channel beforehand, and Porridge must not be currently in another voice channel.) When Porridge joins, he will greet you!\n**p!leave**: Porridge will leave the voice channel he is currently in.\n**p!play [YouTube URL]**: Porridge will play your provided YouTube link! (Note: You must be in a voice channel to use this command. Only the audio will play.)\n**p!stop**: Porridge will stop his current playback.");
        msgObject.channel.send("**CHANCE COMMANDS:**\n\n**p!flip**: Flips a coin.\n**p!d4**: Rolls a 4-sided die.\n**p!d6**: Rolls a 6-sided die.\n**p!d10**: Rolls a 10-sided die.\n**p!d12**: Rolls a 12-sided die.\n**p!d20**: Rolls a 20-sided die.\n**p!d100**: Rolls a percentage die.\n**p!swing**: Take a swing! If you miss, you miss. If you hit, you hit!!! (Spoilers: There's only one thing you can hit.)\n**p!8ball**: Ask a question; Porridge will give you an answer.\n\n**FUN COMMANDS:**\n\nNote: Some of these commands will do something different if you and Porridge are in a voice channel.\n\n**p!at4wquest**: Reminds the GM when the next update is.\n**p!airhorn**: Posts a link to an airhorn sound effect.\n**p!anana**: Posts a GIF of everyone's favourite French-speaking pineapple.\n**p!creator**: Sends love to the bot's creator.\n**p!papyrus**: Nyeh heh heh!\n**p!ruby**: Posts the Rise Ruby GIF.\n**p!terry**: Posts a link to the Perfect Pokerap song. Please take the moment to commemorate BDG's tangly boy, Terry the Tangela.\n**p!nash**: Posts a picture of Action Nash.\n**p!pet**: Pet Porridge!\n**p!funny**: Posts a random funny image.\n**p!rights**: They're human rights.\n**p!cheer**: Send love to any user. (You must mention the user with your command.)\n\n**NSFW COMMANDS:**\n\n**p!fuck**: Porridge will say fuck.");
    }
}
exports.default = help;
