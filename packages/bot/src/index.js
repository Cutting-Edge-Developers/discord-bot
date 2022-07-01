import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';
import { Intents, Options } from '@cuttingedge/utility';
import { Client, Collection } from 'discord.js';

const options = Options.get;
const client = new Client(Intents.defaults);
const eventFiles = readdirSync(join(`${cwd()}/src`, 'events')).filter(f => f.endsWith('.js'));
const commandFiles = readdirSync(join(`${cwd()}/src`, 'commands')).filter(f => f.endsWith('.js'));

client.commands = new Collection();

commandFiles.forEach(async file => {
  const commandFile = await import(`./commands/${file}`).then(c => c.default);
  const command = new commandFile(client);
  client.commands.set(command.name, command);
});

eventFiles.forEach(async file => {
  const eventName = file.split('.js').at(0);
  const event = await import(`./events/${file}`).then(e => e.default);
  const clientEvent = new event(client);
  client.on(eventName, clientEvent.run.bind());
});

client.login(options.clientAccessToken);
