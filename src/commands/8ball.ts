import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class ball implements IBotCommand {

    private readonly _command = "8ball";

    help(): string {
        return "Makes an 8-ball do a thing.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        let message = msgObject.content.length;
        if (message < 10) { //No message attached to p!bug prefix
            msgObject.channel.send("```Bzzt! Please enter a valid question!```");
        }
        else {
            var replies = ["It is certain.", "As I see it, yes.", "Reply hazy, try again.", "Don't count on it.", "It is decidedly so.", 
            "Most likely.", "Ask again later.", "My reply is no.", "Without a doubt.", "Outlook good.", "Better not tell you now.", 
            "My sources say no.", "Yes - definitely.", "Yes.", "Cannot predict now.", "Outlook not so good.", "You may rely on it.", 
            "Signs point to yes.", "Concentrate and ask again.", "Very doubtful."];
        let question = msgObject.content.substr(8, msgObject.content.length); //Grabs everything after p!8ball

        var outcome = Math.floor((Math.random() * replies.length));
        if (outcome == 0) {
            outcome += 1;
        }

        msgObject.channel.send("```You asked: " + question + "```");
        msgObject.channel.send("```Porridge says: " + replies[outcome] + "```");


    

    }

}
}