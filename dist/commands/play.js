"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const YTDL = require("ytdl-core");
class play {
    constructor() {
        this._command = "play";
    }
    help() {
        return "This command has the bot join the voice channel and play music.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            var getString = msgObject.content.split(" ");
            var link = getString[1];
            var validate = YTDL.validateURL(link);
            msgObject.delete();
            if (!getString[1] || !validate) {
                msgObject.channel.send("**```Bzzt! Oops! Please put in a valid YouTube URL!```**");
            }
            else {
                var vidInfo = yield YTDL.getInfo(link);
                var title = vidInfo.title;
                var author = vidInfo.author.name;
                if (msgObject.member.voice.channel && !msgObject.guild.me.voice.connection) {
                    msgObject.member.voiceChannel.join()
                        .then(connection => {
                        msgObject.channel.send("```Bzzt! Porridge has joined your voice channel! (*＾▽＾)／```").catch(console.log);
                        msgObject.channel.send("```" + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) + " NOW PLAYING: " + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) + "\n\n" + `${title} from ${author} (URL: ` + link + ")```");
                        var dispatcher = connection.play(YTDL(link, { filter: 'audioonly' }));
                        dispatcher.setVolume(0.15);
                    });
                }
                else if (msgObject.member.voice.channel && msgObject.guild.me.voice.connection) {
                    var connection = msgObject.guild.me.voice.connection;
                    msgObject.channel.send("```" + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) + " NOW PLAYING: " + String.fromCodePoint(0x1F3B5) + String.fromCodePoint(0x1F3B5) + "\n\n" + `${title} from ${author} (URL: ` + link + ")```");
                    var dispatcher = connection.play(YTDL(link, { filter: 'audioonly' }));
                    dispatcher.setVolume(0.15);
                }
            }
            if (!msgObject.member.voice.channel) {
                msgObject.channel.send("```Bzzt! You are currently not in a voice channel. Please enter the voice channel you want Porridge to join!```");
            }
        });
    }
}
exports.default = play;
