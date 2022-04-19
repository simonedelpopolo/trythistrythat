import output_event from '../../event.js'

/**
 * EventEmitter for queued UNIT test.
 *
 * @fires {queued}
 * @param {string} id - UNIT test
 */
export function queued( id ){
    output_event.emit( 'queued', id )
}
