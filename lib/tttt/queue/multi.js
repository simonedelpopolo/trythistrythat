import queue_container from './container.js'

/**
 * In case multi tests are find in the unit, multi[] is populated with those asyncFunctions
 *
 * @param {string} id - of the unit test
 * @param {AsyncFunction} unit - extra test
 */
export function multi( id, unit ){
  queue_container[ id ].multi.push( unit )
}
