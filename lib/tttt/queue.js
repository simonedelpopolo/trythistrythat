import queue_container from './queue/container.js'
import { queued } from './output/event/emitter/queued.js'

/**
 * Object [ tttt.queue ]
 * UNIT tests queue management.
 *
 * @param {string} id - for UNIT test.
 * @param {AsyncFunction} unit - test
 * @param {string} filename - of UNIT test
 * @returns {Promise<void>|void}
 */
export default async function queue( id, unit, filename ) {

  queue_container[ id ]= {
    id: id,
    asyncFunction: unit,
    filename: filename
  }

  queued( id )
}
