/* eslint-disable no-empty-function */
/* eslint-disable no-console */

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { Options } from './Options.js';

export class InteractionManager {
  checkInteractions(client) {
    client.guilds.cache.forEach(async guild => {
      let commandList = (await guild.commands.fetch().catch(() => {})) || null;

      if (commandList instanceof Map) {
        this.setInteractions(guild);
        if (!commandList.hasAll(this.client.commands.map(c => c.name))) {
          this.setInteractions(guild);
        }
      } else {
        this.setInteractions(guild);
      }
    });
  }

  async setInteractions(guild) {
    let options = Options.get;
    let { client, id } = guild;
    const rest = new REST({ version: '10' }).setToken(options.clientAccessToken);
    let slashCommands = client.commands.map(c => c.data);

    try {
      await rest.put(Routes.applicationGuildCommands(client.user.id, id), { body: slashCommands });
    } catch (e) {
      console.log(e);
    }
  }
}
