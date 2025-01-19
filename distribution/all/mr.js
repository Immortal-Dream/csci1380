/** @typedef {import("../types").Callback} Callback */

/**
 * Map functions used for mapreduce
 * @callback Mapper
 * @param {any} key
 * @param {any} value
 * @returns {object}
 */

/**
 * Reduce functions used for mapreduce
 * @callback Reducer
 * @param {any} key
 * @param {Array} value
 * @returns {object | object[]}
 */

/**
 * @typedef {Object} MRConfig
 * @property {Mapper} map
 * @property {Reducer} reduce
 */


function mr(config = {gid: 'all'}) {
  const context = {};
  context.gid = config.gid;

  /**
   * @param {MRConfig} configuration
   * @param {Callback} cb
   */
  function exec(configuration, cb) {

  return {exec};
};

module.exports = mr;
