import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";
import * as http from "http";
import * as express from "express";
import { request } from "https";
const app = express();

const bot: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`);

app.get("/", request, response => {
    console.log(Date.now() + " Ping received");
    response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.on("ready", () => {
    console.log("Ready to go!");
    bot.user.setActivity("with my army of Porygons", {type: "PLAYING"});
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'central');
    // Do nothing if the channel wasn't found on this server
    if (!channel) { return; }
    // Send the message, mentioning the member
    channel.send(`Bzzt! Hello, ${member}! I'm Porridge, the server's Porygon! Remember to read the rules before posting! Have fun!\n(Type **p!help** for a list of useful commands.)`);
});

bot.on("message", msg => {
    //Ignore messages sent by the bot

    if (msg.author.bot) { return; }

    //Checks for Porridge's name for certain things

    if (!msg.content.startsWith(ConfigFile.config.prefix) && msg.content.includes("Porridge") || msg.content.includes("porridge") || msg.content.includes("PORRIDGE")) {
        if (msg.content.includes("love") || msg.content.includes("LOVE") || msg.content.includes(String.fromCodePoint(10084))) {
            msg.channel.send("(｡･ω･｡)ﾉ♡");
        } 
        
        else if (msg.content.includes("Hello") || msg.content.includes("Hi ") || msg.content.includes("hello") || msg.content.includes("hi ") || msg.content.includes("HELLO") || msg.content.includes("HI ")) {
            msg.channel.send("Bzzt! Hello, " + msg.author.toString() + "! ( ´ ▽ ` )ﾉ");
        }

        else if (msg.content.includes("hewwo") || msg.content.includes("HEWWO") || msg.content.includes("Hewwo")) {
            msg.channel.send("no.");
        }

        else if (msg.content.includes("pokemon") || msg.content.includes("Pokemon") && msg.content.includes("best")) {
            msg.channel.send("Porygon is the best Pokemon! ( ◞･౪･)");
        }

       else if (msg.content.includes("count how many sand there are") || msg.content.includes("Count how many sand there are")) {
          msg.channel.send("That's gonna take forever!!!!!");
            
       }

       else if (msg.content.includes(":pokebean:")) {
           msg.channel.send("(　 ิ౪ ิ )っ─∈");
       }

        else {
            msg.channel.send("(◕‿◕✿)");
        }
    }

        if (!msg.content.startsWith(ConfigFile.config.prefix) && msg.content.includes("Porridge no") || msg.content.includes("porridge no") || msg.content.includes("PORRIDGE NO")) {
            
            msg.channel.send("Porridge yes!!! **(◕‿◕✿)**");
        }

    if (msg.content.includes("diddy") && msg.author.id.toString() == "218191494832586763") {
        msg.channel.send("I gotchu fam (⌐■_■)")
        msg.channel.send("https://www.youtube.com/watch?v=RFZzMbI-mSo");
    }

    //Check for The Secret Words

    if (!msg.content.startsWith(ConfigFile.config.prefix) && (msg.content.includes("ghost")) || msg.content.includes(" G word") || msg.content.includes(" g word") || msg.content.includes(":spectre:")) {
        msg.channel.send("DID SOMEONE SAY GHOST?");
        msg.channel.send("https://www.youtube.com/watch?v=27SS8Pnmrok");
    }

    if (!msg.content.startsWith(ConfigFile.config.prefix) && (msg.content.includes("What hap")) || (msg.content.includes("Wha hap")) || (msg.content.includes("what hap")) || (msg.content.includes("wha hap"))) {
        msg.channel.send("https://tenor.com/view/mickey-mouse-disney-minnie-minnie-mouse-gif-13659068");
    }

    if (!msg.content.startsWith(ConfigFile.config.prefix) && msg.content.includes("OwO") || msg.content.includes("owo")) {
        msg.channel.send("OwO? What's this?");
    }

    if (!msg.content.startsWith(ConfigFile.config.prefix) && msg.content.includes("celery")) {
        var attachment = new Discord.Attachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/celery_time.png`);
        msg.channel.send(attachment);
    }
    //Check for messages with the prefix

    if (msg.content.startsWith(ConfigFile.config.prefix)) {
      handleCommand(msg);
    
    }

});

async function handleCommand(msg: Discord.Message) {


    //Split the string into the command and all of the arguments

    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice[1];

    //Loop through all loaded commands
    for (const commandClass of commands) {

        try{
            //Check command list for correct command class
            if (!commandClass.isThisCommand(command)) {
                //Go to next iteration
                continue;
            }

            await commandClass.runCommand(args, msg, bot);
        }

        catch(exception) {
            //If there is an error, log exception
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if(!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) {return ;}

    //Loop through all commands in the config file

    for (const commandName of ConfigFile.config.commands as string[]) {
        
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

bot.login(ConfigFile.config.token);
