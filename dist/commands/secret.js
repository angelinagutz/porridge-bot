"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replies = ["Up Up Down Down Left Right Left Right B A Start", "This isn't actually a secret, but I love you!",
    "Is the key really in the closet?", "Some things aren't always what they seem.", "It was the butler, in the kitchen, with the knife.", "This is a test secret.",
    "This message will self destruct in thirty seconds.", "It's a secret to everybody.", "at4wquest.tumblr.com/secret",
    "The person reading this is really cool and I hope you have a good day!", "He̛r̦͍̻e͠ ̨̥̘̞̝̗i̹͔̹͚͙̖͘ͅn̺̖̱̱͎̫̪ ҉m͔͖y̫ ҉ḱ̠̙͚̲í̪͖͍̬͕͍͎n͙͈͞g̢ḑ̝̬̭̯ͅo̲͚̪̕ͅm̸͈͙͚̯̜,̶ ̮͍͓̘̩̦ͅI̲ ̹̻͠a͡m̢͍̯̰̻̬̠ͅ ̠͉y̖o͓̘u̲̮̱̣̲̝̺͘r̹͚͎̞̫̘̣͘ ̥͎̠̰̻͞L̬̞̞̳͕o̵̲͚̝̟r̙̙͙̫͝d̪̥̳̩͟.͈͉̜̠̤ ̦̘̤̰̀I̬ ̠͔̯͔o̰̠̤̮̬͉r͎̥d̟͖̲̪̺͕̯͡e̫̖r̭̞͝ ̢̘̠̜̘͙̥ͅy̬̰͎̹̝͎̣óu̶͙̙͖̬̳̬̫ ̛̗̜͖͕t̸̜͖͙o̰̝͟ͅ ̯͍͓c̘̩̠̳̭̠͕o̡̬̱wer͙̲̮̜͕ ̲͙͓̥̖͉a̞n҉d ̵͈̼̫p͏̺̞̝̱r҉̼á͍e͇̮̩̞̖̭y͖͔̟͚̰͔̺.̧̘͉",
    "Is 90's Kid truly innocent?", "Fantasy Costco! Where all your dreams come true! (Got a deal for you!)", "https://www.youtube.com/watch?v=mjIFQw6U5hc",
    "The rumour come out: does Bruno Mars is gay?", "Top Ten Places To Store a Cursed Longbox.",
    "According to all known laws of aviation, there is no way a bee should be able to fly.", "Remember to stay hydrated.", "Have you eaten yet?", "Remember to stretch your legs!",
    "Porygon: A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace.", "....you know ;)", "How did I get here?", "This is not my beautiful house. This is not my beautiful wife!",
    "Soylent green.....is people.", "I know many things. The date for the next AT4WQuest update is not one of them.", "https://www.youtube.com/watch?v=OXQwx1EolD8", "Oh snap! I do not hear such a truth...!?", "We̯̠̞ ̲̖͎̬̺̕a̸̦ṛ̶̟e̤̯̗ ͇̖̞ṯ̛h̤͎̣͈͇e̸ ͇̠̟͚͙̼͔M̸͖̠̻̝e̤͈̥t̗͎͍͙̱̝̫á̳͉̯͕̲͕͕.͕̞̗̭̻",
    "I can't stop this feeling deep inside of me.", "Who is Fat Grandma?", "Can you truly defeat Pilo?",
    "I saw all of existence, all at once. I saw a dark storm, a living hunger, eating it from within. But I saw a brilliant light, heralded by seven birds, flying tirelessly from the storm."];
class secret {
    constructor() {
        this._command = "secret";
    }
    help() {
        return "Porridge tells you a secret. The message deletes after one minute.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, bot) {
        //Gather a list of secrets
        var outcome = Math.floor((Math.random() * replies.length));
        if (outcome == 0) {
            outcome += 1;
        }
        msgObject.channel.send("```" + replies[outcome] + "```").then(d_msg => {
            d_msg.delete({ timeout: 30000 });
        });
    }
}
exports.default = secret;
