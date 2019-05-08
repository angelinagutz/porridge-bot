import * as Discord from "discord.js";
import {IBotCommand} from "../api";


export default class roll implements IBotCommand {

    private readonly _command = "roll";

    help(): string {
        return "Rolls a specified die.";
    }
    isThisCommand(command: string): boolean {
        
        return command === this._command;

    }
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void {

        //Initialize all variables

        var numOfDice = 0;
        var numOfSides = 0;
        var diceRoll = new Array();
        var resultsString = "";
        var sum = 0;
        
        var getString = msgObject.content.split(" ");
        //If there's no message after the command
        if (!getString[1]) {
            msgObject.channel.send("```Bzzt! Oops! Please input what dice you want to roll!```");
        }
        //If the message doesn't follow the format
        else if (!getString[1].includes("d")) {
            msgObject.channel.send("```Oops! Please follow the XdY format when rolling your dice!```");
        }
        else {
            //Get the values
        var getNumber = getString[1].split("d");

        //Get number of dice
        //The default number of dice is 1, therefore if there is no value before the d, return as 1
        if (!getNumber[0]) {
            numOfDice = 1;
        }
        //If there is a value, convert value from string to number
        else {
            numOfDice = Number(getNumber[0]);
        }
        //If the string is not a number
        if (isNaN(numOfDice)) {
            msgObject.channel.send("``Bzzt! Oops! Please input a valid number of dice you want to roll!```");
        }
        //If the value is more than 99
        else if (numOfDice > 100) {
            msgObject.channel.send("```Bzzt! I can only roll up to 100 dice!!!! Σ(ﾟдﾟ；)```");
        }

        //Get which sided die
        //If no value after the d, return as 6
        if (!getNumber[1]) {
            numOfSides = 6;
        }
        else {
            numOfSides = Number(getNumber[1]);
        }
        //If the string is not a number
         if (isNaN(numOfSides)) {
         msgObject.channel.send("``Bzzt! Oops! Please put in a valid type of die you want to roll!");
        }
        //If the value is more than 100
        else if (numOfSides > 100) {
            msgObject.channel.send("```Bzzt! The die you want to roll has too many sides!!!! Σ(ﾟдﾟ；)```");
            }
        
        //At this point, it's time to roll!!!!!
        if ((!isNaN(numOfDice) && (numOfDice <= 100)) && (!isNaN(numOfSides) && (numOfSides <= 100))) {
            for (var i = 0; i < numOfDice; i++) {
            //Every result to be pushed into an array
            diceRoll.push(Math.floor(Math.random() * (numOfSides + 1 - 1) + 1));

        if (diceRoll[i] == 0) {
            diceRoll[i] += 1;
        }
        //Add the result to a sum
        sum += diceRoll[i];
            }

            //Print results
            for (var i = 0; i < diceRoll.length; i++) {
                //Append resultsString with each dice roll result, and adding a plus sign in between
                resultsString += diceRoll[i];
                if (i != (diceRoll.length - 1)) {
                    resultsString += " + ";
                }
            }
            msgObject.channel.send("```Now rolling: " + numOfDice + "d" + numOfSides + "\nBzzt! Your result: " + resultsString + "```");
            if (sum != diceRoll[0]) {
                msgObject.channel.send("```The sum of this roll is: " + sum + "```");
            /*
            *Message prints as: 
            *Now rolling: [XdY]
            *Bzzt! Your result: [Results]
            *The sum of this roll is: [Sum]
            */
            }
        }
    }
}
}