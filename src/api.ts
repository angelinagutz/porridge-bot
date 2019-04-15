import * as Discord from "discord.js";

export interface IBotCommand {
    help(): string;
    isThisCommand(command: string): boolean;
    runCommand(args: string[], msgObject: Discord.Message, bot: Discord.Client): void;
}