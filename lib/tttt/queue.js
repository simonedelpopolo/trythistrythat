import { queue_container } from '../../index.js'
import { queued } from './output/event/emitter/queued.js'
import tttt from '../tttt.js'

const queueSymbol = Symbol.for( 'Object [ tttt.queue ]' )
const queue = Object.defineProperty( tttt, queueSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.queue ]
     * UNIT tests queue management.
     *
     * @param {string} id - for UNIT test.
     * @param {AsyncFunction} unit - test
     * @param {string} filename - of UNIT test
     * @returns {Promise<void>|void}
     */
    value: async function queue( id, unit, filename ) {

        queue_container[ id ]= {
            id: id,
            asyncFunction: unit,
            filename: filename
        }

        queued( id )
    }
} )

export default queue[ queueSymbol ]
