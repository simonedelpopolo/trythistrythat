import output_event from '../../event.js'

/**
 * EventEmitter for ending UNIT test.
 *
 * @fires {randomUUID=unit-test-id}
 * @param {string} id - UNIT test
 */
export function end( id ){
  output_event.emit( id, id )
}
