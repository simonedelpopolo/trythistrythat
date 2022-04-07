import { output_event } from '../../../../../index.js'

/**
 * EventEmitter for queued UNIT test.
 *
 * @fires {queued}
 * @param {string} id - UNIT test
 */
export function queued( id ){
    output_event.emit( 'queued', id )
}
