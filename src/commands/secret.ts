import * as Discord from "discord.js";
import {IBotCommand} from "../api";

var replies = ["Up Up Down Down Left Right Left Right B A Start", "This isn't actually a secret, but I love you!",
"Is the key really in the closet?","Some things aren't always what they seem.","It was the butler, in the kitchen, with the knife.", "This is a test secret.",
"This message will self destruct in one minute.","It's a secret to everybody.","at4wquest.tumblr.com/secret",
"The person reading this is really cool and I hope you have a good day!","He̛r̦͍̻e͠ ̨̥̘̞̝̗i̹͔̹͚͙̖͘ͅn̺̖̱̱͎̫̪ ҉m͔͖y̫ ҉ḱ̠̙͚̲í̪͖͍̬͕͍͎n͙͈͞g̢ḑ̝̬̭̯ͅo̲͚̪̕ͅm̸͈͙͚̯̜,̶ ̮͍͓̘̩̦ͅI̲ ̹̻͠a͡m̢͍̯̰̻̬̠ͅ ̠͉y̖o͓̘u̲̮̱̣̲̝̺͘r̹͚͎̞̫̘̣͘ ̥͎̠̰̻͞L̬̞̞̳͕o̵̲͚̝̟r̙̙͙̫͝d̪̥̳̩͟.͈͉̜̠̤ ̦̘̤̰̀I̬ ̠͔̯͔o̰̠̤̮̬͉r͎̥d̟͖̲̪̺͕̯͡e̫̖r̭̞͝ ̢̘̠̜̘͙̥ͅy̬̰͎̹̝͎̣óu̶͙̙͖̬̳̬̫ ̛̗̜͖͕t̸̜͖͙o̰̝͟ͅ ̯͍͓c̘̩̠̳̭̠͕o̡̬̱wer͙̲̮̜͕ ̲͙͓̥̖͉a̞n҉d ̵͈̼̫p͏̺̞̝̱r҉̼á͍e͇̮̩̞̖̭y͖͔̟͚̰͔̺.̧̘͉",
"Is 90's Kid truly innocent?", "Fantasy Costco! Where all your dreams come true! (Got a deal for you!)", "https://www.youtube.com/watch?v=mjIFQw6U5hc",
"The rumour come out: does Bruno Mars is gay?", "Top Ten Places To Store a Cursed Longbox.", 
"According to all known laws of aviation, there is no way a bee should be able to fly.", "Remember to stay hydrated.", "Have you eaten yet?", "Remember to stretch your legs!",
"Porygon: A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace.", "....you know ;)",
"Soylent green.....is people.", 
"I saw all of existence, all at once. I saw a dark storm, a living hunger, eating it from within. But I saw a brilliant light, heralded by seven birds, flying tirelessly from the storm."]

export default class secret implements IBotCommand {

    private readonly _command = "secret";

    help(): string {
        return "Porridge tells you a secret. The message deletes after one minute.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

      //Gather a list of secrets

      var outcome = Math.floor((Math.random() * replies.length));
        if (outcome == 0) {
            outcome += 1;
        }
        msgObject.channel.send("```" + replies[outcome] + "```").then(d_msg => {
            msgObject.delete(30000)
            d_msg.delete(30000)
        });

    }
}