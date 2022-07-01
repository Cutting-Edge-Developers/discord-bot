import { Intents as DiscordIntents } from 'discord.js';

/**
 * Discord client intents.
 */
export class Intents extends null {
  /**
   * Discord intent flags for a client.
   *
   * @returns {object} An array of collection for intent flags
   */
  static defaults = {
    intents: [
      DiscordIntents.FLAGS.GUILDS,
      DiscordIntents.FLAGS.GUILD_MEMBERS,
      DiscordIntents.FLAGS.GUILD_BANS,
      DiscordIntents.FLAGS.GUILD_SCHEDULED_EVENTS,
    ],
  };
}
