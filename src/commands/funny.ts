
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

var maxNum = 129;

export default class funny implements IBotCommand {


    private readonly _command = "funny";

    help(): string {
        return "Posts a random image.";
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

        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/funny/${imageNum}.PNG`);
        msgObject.channel.send(attachment);

    }
}
//