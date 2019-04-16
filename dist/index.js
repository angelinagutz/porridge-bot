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
var petNum = 0;
var batNum = 0;
let commands = [];
loadCommands(`${__dirname}/commands`);

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.on("ready", () => {
    console.log("Ready to go!");
    bot.user.setActivity("with my army of Porygons", { type: "PLAYING" });
});
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'central');
    // Do nothing if the channel wasn't found on this server
    if (!channel) {
        return;
    }
    // Send the message, mentioning the member
    channel.send(`Bzzt! Hello, ${member}! I'm Porridge, the server's Porygon! Remember to read the rules before posting! Have fun!\n(Type **p!help** for a list of useful commands.)`);
});
bot.on("message", msg => {
    //Ignore messages sent by the bot
    if (msg.author.bot) {
        return;
    }
    //Checks for Porridge's name for certain things
    if (!msg.content.startsWith(ConfigFile.config.prefix) && msg.content.includes("Porridge") || msg.content.includes("porridge") || msg.content.includes("PORRIDGE")) {
        if (msg.content.includes("love") || msg.content.includes("LOVE") || msg.content.includes(String.fromCodePoint(10084))) {
            msg.channel.send("(｡･ω･｡)ﾉ♡");
        }
        else if (msg.content.includes("Hello") || msg.content.includes("Hi") || msg.content.includes("hello") || msg.content.includes("hi") || msg.content.includes("HELLO") || msg.content.includes("HI")) {
            msg.channel.send("Bzzt! Hello, " + msg.author.toString() + "! ( ´ ▽ ` )ﾉ");
        }
        else if (msg.content.includes("hewwo") || msg.content.includes("HEWWO") || msg.content.includes("Hewwo")) {
            msg.channel.send("no.");
        }
        else if (msg.content.includes("pokemon") || msg.content.includes("Pokemon") && msg.content.includes("best")) {
            msg.channel.send("Porygon is the best Pokemon! ( ◞･౪･)");
        }
        else {
            msg.channel.send("(◕‿◕✿)");
        }
    }
    if (msg.content.includes("diddy") && msg.author.id.toString() == "218191494832586763") {
        msg.channel.send("I gotchu fam (⌐■_■)");
        msg.channel.send("https://www.youtube.com/watch?v=RFZzMbI-mSo");
    }
    //Check for The Secret Words
    if (!msg.content.startsWith(ConfigFile.config.prefix) && msg.content.includes("ghost")) {
        msg.channel.send("DID SOMEONE SAY GHOST?");
        msg.channel.send("https://www.youtube.com/watch?v=27SS8Pnmrok");
    }
    if (msg.content.includes("OwO") || msg.content.includes("owo")) {
        msg.channel.send("OwO? What's this?");
    }
  
    if (msg.content.includes("powwidge") || msg.content.includes("Powwidge")) {
        msg.channel.send("no.");
  }
    //Check for messages with the prefix
    if (msg.content.startsWith(ConfigFile.config.prefix)) {
        handleCommand(msg);
    }
    if (msg.content.startsWith(ConfigFile.config.prefix) && msg.content.includes("pet")) {
        petNum++;
        msg.channel.send("♥（ﾉ´∀`）");
        msg.channel.send(msg.author.toString() + " has petted Porridge! Porridge has been pet " + petNum + " times!");
    }
    if (msg.content.startsWith(ConfigFile.config.prefix) && (msg.content.includes("bat") || msg.content.includes("swing"))) {
        msg.channel.send("(ʃƪ¬‿¬)");
        var chance = Math.floor(Math.random() * 3);
        if (chance == 0) {
            chance += 1;
        }
        if (chance == 1) {
            msg.channel.send(msg.author.toString() + " takes a swing....**and misses**!");
        }
        if (chance == 2) {
            batNum++;
            msg.channel.send(msg.author.toString() + " takes a swing....**and hits**! Nimue has been hit with a bat " + batNum + " times.");
        }
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
