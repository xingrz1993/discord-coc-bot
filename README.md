# Discord COC Bot
[![Downloads](https://img.shields.io/npm/dt/discord-coc-bot.svg)](https://www.npmjs.com/package/discord-coc-bot)
[![Version](https://img.shields.io/npm/v/discord-coc-bot.svg)](https://www.npmjs.com/package/discord-coc-bot)
[![License](https://img.shields.io/npm/l/discord-coc-bot.svg)](LICENSE)
[![Node.js CI](https://github.com/xingrz1993/discord-coc-bot/workflows/Node.js%20CI/badge.svg)](https://github.com/xingrz1993/discord-coc-bot/actions?query=workflow%3A%22Node.js+CI%22)

This bot is a fork of [Discord RPbot](https://www.github.com/gawdl3y/discord-rpbot). Updates have been made for a better experience of playing Call of Cthulu.
It is built with [GRAF](https://github.com/Gawdl3y/discord-graf).

Have any questions/feedback?
If you find any bugs or have suggestions, feel free to [create an issue](/../../issues).

## Install
### Global bot
This is currently only a private used bot. Please contact me if you want to invite this bot in your Discord server.

### Your own instance
You must be running Node.js 6.0.0 or newer.  
Run `sudo npm install -g discord-coc-bot --production --no-optional`.

**Note:** Anonymous analytics are enabled by default.
There is no identifiable or potentially private/unsafe information sent whatsoever.
The only things that are being shared is the name of commands being run (no message contents), and an event for the bot starting up.
This is so that I know how many people are using the bot, and what commands are being used the most.
If you don't want anything being sent at all, run RPBot with the `--no-analytics` option, or set `analytics` to `false` in your config file.

## Chat commands
See GRAF's [command documentation](https://gawdl3y.github.io/discord-graf/manual/overview.html#commands) for information about its built-in commands, and how to use commands.

| Command          | Description                                                                                                   |
|------------------|---------------------------------------------------------------------------------------------------------------|
| roll             | Rolls specified dice. (Uses [dice-expression-evaluator](https://github.com/dbkang/dice-expression-evaluator)) |
| maxroll          | Calculates the maximum possible roll for a dice expression.                                                   |
| minroll          | Calculates the minimum possible roll for a dice expression.                                                   |
| character        | Views a character's information.                                                                              |
| characters       | Lists/searches characters in the database.                                                                    |
| addcharacter     | Adds a character to the database, or updates the existing one.                                                |
| deletecharacter  | Deletes a character from the database.                                                                        |

## Usage
Run `rpbot --help` for detailed usage, options, and examples.

## Configure
Configuration can be specified on the command line, or in a JSON or YAML config file.
Specify the config file with `--config path/to/config.yml`.
The settings:

| Setting              | Description                                                                      |        
|----------------------|----------------------------------------------------------------------------------|
| token                | API token for the bot account                                                    |
| email                | Email of the Discord account for the bot to use (not needed if using `token`)    |
| password             | Password of the Discord account for the bot to use (not needed if using `token`) |
| database             | Path to SQLite3 database file                                                    |
| database-verbose     | Whether or not SQLite3 should be put into verbose mode                           |
| storage              | Path to the storage directory                                                    |
| owner                | Discord user ID of the bot owner                                                 |
| invite               | Discord instant invite to a server to contact the owner                          |
| playing-game         | Text to show in the "Playing..." status                                          |
| pagination-items     | Number of items per page in paginated commands                                   |
| update-check         | How frequently to check for an update (in minutes - use 0 to disable)            |
| analytics            | Whether or not to enable anonymous, non-unique, non-identifiable analytics       |
| auto-reconnect       | Whether or not the bot should automatically reconnect when disconnected          |
| command-prefix       | Default command prefix (blank to use only mentions)                              |
| command-editable     | How long a command message is editable (in seconds, use 0 to disable)            |
| non-command-edit     | Whether or not a non-command message can be edited into a command                |
| log                  | Path to the log file to output to                                                |
| log-max-size         | Maximum size of a single log file (in bytes)                                     |
| log-max-files        | Maximum log files to keep                                                        |
| log-level            | Log level to output to the log file (error, warn, info, verbose, message, debug) |
| console-level        | Log level to output to the console (error, warn, info, verbose, message, debug)  |
| log-messages         | Whether or not all chat messages should be logged                                |

For a more detailed list of configuration values, use `rpbot --help`.
