'use babel';
'use strict';

import { Bot } from 'discord-graf';
import { stripIndents } from 'common-tags';
import version from './version';

export default new Bot({
	name: 'RPBot',
	version: version,
	about: stripIndents`
		**coc-bot** v${version} created by Zora Xing(xingrz1993).
		Source code and information: https://github.com/xingrz1993/discord-coc-bot
	`,
	updateURL: 'https://raw.githubusercontent.com/xingrz1993/discord-coc-bot/master/package.json',
	clientOptions: {
		disableEveryone: true,
		messageCacheLifetime: 120,
		messageSweepInterval: 60
	}
});
