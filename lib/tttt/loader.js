import { output__ } from '../exporter.js'
import { queue } from '../../index.js'
import tttt from '../tttt.js'

const loaderSymbol = Symbol( 'Object [ tttt.loader ]' )
const loader = Object.defineProperty( tttt, loaderSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    value: {
        /**
         * Populate the queue.
         *
         * @param {string} filename - UNIT test filename.
         * @returns {Promise<void>}
         */
        async set( filename ){

            await queue( output__.id, ( await import( filename ) ).default )
        },
    },
} )

export default loader[ loaderSymbol ]
