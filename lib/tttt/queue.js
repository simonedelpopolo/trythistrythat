import { output__ } from '../exporter.js'
import { queue_container } from '../../index.js'
import tttt from '../tttt.js'

const queueSymbol = Symbol( 'Object [ tttt.queue ]' )
const queue = Object.defineProperty( tttt, queueSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * UNIT tests queue handler.
     *
     * @param {string} id - UNIT test id.
     * @param {AsyncFunction} unit_test - the unit test async function.
     * @returns {Promise<void>}
     */
    value: async function queue( id, unit_test ) {
    
        queue_container.push( { [ id ]: unit_test } )
        
        output__.event.emit( 'inserted', id )
    }
} )

export default queue[ queueSymbol ]
