import output_event from '../../event.js'

/**
 * EventEmitter for queued UNIT test all set.
 *
 * @fires {queued}
 */
export function queued(  ){
  output_event.emit( 'queued' )
}
