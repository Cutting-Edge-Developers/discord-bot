import { Intents } from 'discord.js';

/**
 * Hex code for the color.
 *
 * @typedef {string} hexCode
 */

/**
 * Client constants for utility.
 */
export class Constants extends null {
  /**
   * Discord intent flags for a client.
   *
   * @returns {object} An array of collection for intent flags
   */
  static defaultIntents = {
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_BANS,
      Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    ],
  };

  /**
   * Client colors for discord embed messages.
   *
   * @returns {hexCode}
   */
  static colors = {
    SUCCESS: '#61eb34',
    INFO: '#ebe534',
    WARNING: '#eb3434',
    PRIMARY: '#34ebd0',
    MUTED: '#cccccc',
  };

  /**
   * Readable strings for handled errors.
   *
   * @returns {string}
   */
  static errorMessages = {};

  /**
   * Utility strings for debugging.
   *
   * @returns {string}
   */
  static debugMessages = {};
}
