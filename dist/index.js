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
const Discord = require("discord.js");
const ConfigFile = require("./config");
const http = require("http");
const express = require("express");
const https_1 = require("https");
const app = express();
const bot = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping received");
    response.sendStatus(200);
});

//When bot is connected
bot.on("ready", () => {
    console.log("Ready to go!");
    bot.user.setActivity("with my army of Porygons", { type: "PLAYING" });
});
//Actions detected by the bot
//When a member joins the server
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'central');
    // Do nothing if the channel wasn't found on this server
    if (!channel) {
        return;
    }
    // Send the message, mentioning the member
    channel.send(`Bzzt! Hello, ${member}! I'm Porridge, the server's Porygon! Remember to read the rules before posting! Have fun!\n(Type **p!help** for a list of useful commands.)`);
});
//When a member sends a message
bot.on("message", msg => {
    //Ignore messages sent by the bot
    if (msg.author.bot) {
        return;
    }
    //Checks for Porridge's name for certain things
    var message = msg.content.toLowerCase();
    if (!message.startsWith(ConfigFile.config.prefix) && message.includes("porridge")) {
        if (message.includes("love") || msg.content.includes(String.fromCodePoint(10084))) {
            msg.channel.send("(｡･ω･｡)ﾉ♡");
        }
        else if (message.includes("hello") || message.includes("hi ")) {
            msg.channel.send("Bzzt! Hello, " + msg.author.toString() + "! ( ´ ▽ ` )ﾉ");
        }
        else if (message.includes("hewwo")) {
            msg.channel.send("no.");
        }
        else if (message.includes("pokemon") && message.includes("best")) {
            msg.channel.send("Porygon is the best Pokemon! ( ◞･౪･)");
        }
        else if (message.includes("count how many sand there are")) {
            msg.channel.send("That's gonna take forever!!!!!");
        }
        else if (message.includes(":pokebean:")) {
            msg.channel.send("(　 ิ౪ ิ )っ─∈");
        }
        else {
            msg.channel.send("(◕‿◕✿)");
        }
    }
    if (!message.startsWith(ConfigFile.config.prefix) && message.includes("porridge no")) {
        msg.channel.send("Porridge yes!!! **(◕‿◕✿)**");
    }
    if (message.includes("diddy") && msg.author.id.toString() == "218191494832586763") {
        msg.channel.send("I gotchu fam (⌐■_■)");
        msg.channel.send("https://www.youtube.com/watch?v=RFZzMbI-mSo");
    }
    //Check for The Secret Words
    if (!message.startsWith(ConfigFile.config.prefix) && (message.includes("ghost")) || message.includes(" g word") || message.includes("g-word")) {
        msg.channel.send("DID SOMEONE SAY GHOST?");
        msg.channel.send("https://www.youtube.com/watch?v=27SS8Pnmrok");
    }
    if (!message.startsWith(ConfigFile.config.prefix) && message.includes("owo")) {
        msg.channel.send("OwO? What's this?");
    }
    if (!message.startsWith(ConfigFile.config.prefix) && message.includes("celery")) {
        var attachment = new Discord.MessageAttachment(`https://raw.githubusercontent.com/angelinagutz/porridge-bot/master/assets/image/celery_time.png`);
        msg.channel.send(attachment);
    }
    //Check for messages with the prefix
    if (msg.content.startsWith(ConfigFile.config.prefix)) {
        handleCommand(msg);
    }
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        //Split the string into the command and all of the arguments
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
        let args = msg.content.split(" ").slice[1];
        //Loop through all loaded commands
        for (const commandClass of commands) {
            try {
                //Check command list for correct command class
                if (!commandClass.isThisCommand(command)) {
                    //Go to next iteration
                    continue;
                }
                yield commandClass.runCommand(args, msg, bot);
            }
            catch (exception) {
                //If there is an error, log exception
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    //Exit if there are no commands
    if (!ConfigFile.config.commands || ConfigFile.config.commands.length === 0) {
        return;
    }
    //Loop through all commands in the config file
    for (const commandName of ConfigFile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
bot.login(ConfigFile.config.token);
