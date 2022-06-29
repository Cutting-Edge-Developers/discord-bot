import process from 'node:process';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Options for the client.
 *
 * @typedef {object} ClientOptions
 * @property {string} DEBUG_MODE Debug mode status for client
 * @property {string} DEVELOPMENT Debug mode status for client
 * @property {string} CLIENT_ACCESS_TOKEN Debug mode status for client
 * @property {string} DB_IP Database IP
 * @property {string|number} DB_PORT Database port number
 * @property {string} DB_NAME Database name
 * @property {string} DB_USERNAME Database username
 * @property {string} DB_PASSWORD Database password for access
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
    return this.#mergeOptions();
  }

  /**
   * Sets default properties on an object that aren't already specified.
   *
   * @returns {object} Merged client options with defaults
   * @private
   */
  static #mergeOptions() {
    // ! rewrite in the future.
    const def = this.#createDefaults;
    const given = {
      DEBUG_MODE: process.env.DEBUG_MODE,
      DEVELOPMENT: process.env.DEVELOPMENT,
      CLIENT_ACCESS_TOKEN: process.env.CLIENT_ACCESS_TOKEN,
      DB_IP: process.env.DB_IP,
      DB_PORT: process.env.DB_PORT,
      DB_NAME: process.env.DB_NAME,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
    };

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
  static get #createDefaults() {
    return {
      DEBUG_MODE: false,
      DEVELOPMENT: true,
      CLIENT_ACCESS_TOKEN: undefined,
      DB_IP: '127.0.0.1',
      DB_PORT: 27017,
      DB_NAME: 'CuttingEdge',
      DB_USERNAME: '',
      DB_PASSWORD: '',
    };
  }
}
