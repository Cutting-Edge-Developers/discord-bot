/**
 * Useful JavaScript methods for utility pack.
 */
export class Util extends null {
  /**
   * Concat given arrays.
   *
   * @param {Array} array First given array
   * @param  {Array} args Second and more given arrays
   * @returns {Array}
   */
  static mergeArrays(array, ...args) {
    return array.concat(...args);
  }
  /**
   * Check the type for a given parameter with a filter.
   *
   * @param {any} given Parameter
   * @param {object|boolean|string|number|Array} filter Given type for control
   * @returns {boolean}
   * @example
   * Util.checkType(object, undefined);
   * // returns false
   */
  static checkType(given, filter) {
    if (typeof given === filter) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Deep freeze an object.
   *
   * @param {object} object Given object to deep freeze
   * @returns {object}
   */
  static deepFreeze(object) {
    /* eslint-disable no-unused-vars */
    Object.entries(object).forEach(([key, value]) => {
      if (value && typeof value === 'object') {
        this.deepFreeze(value);
      }
    });

    return Object.freeze(object);
  }
}
