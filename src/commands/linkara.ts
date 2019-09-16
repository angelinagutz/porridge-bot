import * as Discord from "discord.js";
import {IBotCommand} from "../api";

var maxNum = 86;

export default class linkara implements IBotCommand {

    private readonly _command = "linkara";

    help(): string {
        return "Posts everyone's favourite comic reviewer.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        var getFileName = msgObject.content.split(" ");

        if (!getFileName[1]) {
        
        var imageNum = Math.floor(Math.random() * (maxNum - 1 + 1) + 1);

        }

        else {
            if (Number(getFileName[1]) > maxNum) {

                msgObject.channel.send("```Sorry, there's no image with that number. Have a random image instead!```");
                imageNum = Math.floor(Math.random() * (maxNum - 1 + 1) + 1);
            
            }

            else {

                imageNum = Number(getFileName[1]);
            }
        }

        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/linkara/${imageNum}.png`);
        msgObject.channel.send(attachment);

    }
        
    }
