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
class join {
    constructor() {
        this._command = "join";
    }
    help() {
        return "This command has the bot join the voice channel";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        return __awaiter(this, void 0, void 0, function* () {
            //Let us know it all went well
            if (msgObject.member.voice.channel && !msgObject.guild.me.voice.connection) {
                msgObject.member.voice.channel.join()
                    .then(connection => {
                    msgObject.channel.send("```Bzzt! Porridge has joined your voice channel! (*＾▽＾)／```").catch(console.log);
                    var dispatcher = connection.play(YTDL('https://www.youtube.com/watch?v=cXq-0HSG6KY', { filter: 'audioonly' }));
                    dispatcher.setVolume(0.5);
                });
            }
            else if (!msgObject.member.voice.channel) { //User is not in a voice channel
                msgObject.channel.send("```Bzzt! You are currently not in a voice channel. Please enter the voice channel you want Porridge to join!```");
            }
            else if (msgObject.guild.voice.connection) { //Porridge is already in a voice channel
                msgObject.channel.send("```Bzzt! Porridge is already in a voice channel!```");
            }
        });
    }
}
exports.default = join;
