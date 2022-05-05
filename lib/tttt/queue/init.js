import { exit } from '@cli-blaze/activity'
import { multi } from './multi.js'
import queue from '../queue.js'
import queue_container from '../queue/container.js'
import { queued } from '../output/event/emitter/queued.js'
import { randomUUID } from 'crypto'

/**
 * UNIT tests queue initialization.
 *
 * @param {string[]} units - array of filenames
 * @returns {Promise<void>|void}
 */
export default async function init( units ) {

  for( const unit of units ){
    const id = randomUUID()
    const unit_exports = await import( unit )
    const unit_exportsKeysLength = Object.keys( unit_exports ).length

    if( ! unit_exports.default )
      await exit( 'no default export' )

    if( unit_exportsKeysLength === 1 )
      await queue( id, unit_exports.default, unit )
    else if ( unit_exportsKeysLength > 1 ){
      await queue( id, unit_exports.default, unit )
      for( const multi_unit in unit_exports ) {
        if( unit_exports[ multi_unit ].name !== 'default' )
          await multi( id, unit_exports[ multi_unit ] )
      }
    }

    if( Object.keys( queue_container ).length === units.length )
      queued()
  }
}
