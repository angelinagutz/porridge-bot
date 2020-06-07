
import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class birthday implements IBotCommand {

    private readonly _command = "birthday";

    help(): string {
        return "Porridge celebrates your birthday!";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        if(!msgObject.mentions.users.first()) {
            msgObject.channel.send("```Bzzt! Please mention the user whose birthday it is today!```");
        }

        else {
        var mention = msgObject.mentions.users.first();
        msgObject.channel.send("Porridge heard it was " + mention.toString() + "'s birthday today!\n\n" + String.fromCodePoint(127881) + String.fromCodePoint(127881) + String.fromCodePoint(127874) + String.fromCodePoint(127873) + String.fromCodePoint(127873) + String.fromCodePoint(127881) + String.fromCodePoint(127881));
        msgObject.channel.send("HAPPY BIRTHDAY!!! ☆*･゜ﾟ･*(^O^)/*･゜ﾟ･*☆");
        var attachment = new Discord.MessageAttachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/birthday_porridge.PNG`);
        msgObject.channel.send(attachment);
        }

    }
}
