import process from 'node:process';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Options for the client.
 *
 * @typedef {object} ClientOptions
 * @property {object} settings General settings for the engine
 * @property {boolean} settings.debugMode Debug mode status for client
 * @property {string} clientAccessToken Client access token for connect to Discord WebSocket
 * @property {object} db Database settings
 * @property {string} db.ip Database IP
 * @property {string|number} db.port Database port number
 * @property {string} db.name Database name
 * @property {string} db.username Database username for access
 * @property {string} db.password Database password for access
 */

/**
 * Contains various utilities for client options.
 */
export class Options extends null {
  /**
   * Options for the client.
   *
   * @returns {ClientOptions}
   */
  static get get() {
    const def = this.#getDefaults;
    const given = this.#getGiven;
    return this.#mergeOptions(def, given);
  }

  /**
   * Sets default properties on an object that aren't already specified.
   *
   * @param {object} def Default properties
   * @param {object} given Object to assign defaults to
   * @returns {object}
   * @private
   */
  static #mergeOptions(def, given) {
    if (!given) return def;
    for (const key in def) {
      if (!Object.hasOwn(given, key) || given[key] === undefined) {
        given[key] = def[key];
      } else if (given[key] === Object(given[key])) {
        given[key] = this.#mergeOptions(def[key], given[key]);
      }
    }

    return given;
  }
  /**
   * The default client options.
   *
   * @returns {object} Default options for the client
   * @private
   */
  static get #getDefaults() {
    return {
      settings: {
        debugMode: false,
      },
      clientAccessToken: undefined,
      db: {
        ip: '127.0.0.1',
        port: 27017,
        name: 'CuttingEdge',
        username: undefined,
        password: undefined,
      },
    };
  }

  /**
   * The given client options.
   *
   * @returns {object} Given options for the client
   * @private
   */
  static get #getGiven() {
    // ! Add twitch, youtube and some API
    return {
      settings: {
        debugMode: process.env.DEBUG_MODE,
      },
      clientAccessToken: process.env.CLIENT_ACCESS_TOKEN,
      db: {
        ip: process.env.DB_IP,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
      },
    };
  }
}
