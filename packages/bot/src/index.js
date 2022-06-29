import { Constants, Options } from '@cuttingEdge/utility';
import { Client } from 'discord.js';

const options = Options.get;
const client = new Client(Constants.defaultIntents);

client.login(options.CLIENT_ACCESS_TOKEN);
