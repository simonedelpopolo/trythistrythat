import {  default as loader } from '../loader.js'
import { output_generator_id, output_id_get, queue } from '../../../index.js'

const setSymbol = Symbol.for( 'Object [ tttt.loader.set ]' )
const set = Object.defineProperty( loader, setSymbol, {
    enumerable: true,

    /**
     * Object [ tttt.loader.set ]
     * dynamically imports of the unit test into the queue.
     *
     * @type {Object}
     * @returns {Promise<void> | void}
     */
    value: async function loader_set( filename ){
        output_generator_id()
        await queue( output_id_get(), ( await import( filename ) ).default, filename )
    }
} )

export default set[ setSymbol ]
