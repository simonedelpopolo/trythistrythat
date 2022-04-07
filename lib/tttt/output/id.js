import { default as output } from '../../exports.js'
import { randomUUID } from 'crypto'

/**
 * @type {ArrayBuffer}
 */
export let output_id

const idSymbol = Symbol.for( 'Object [ tttt.output.id ]' )
const id = Object.defineProperty( output, idSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.output.id ] generation.
     */
    value: function output_generator_id ( ) {

        let idArray = Array.from( randomUUID() )

        const idBuffer = new ArrayBuffer( idArray.length )
        const idBufferView = new Uint8Array( idBuffer )

        for ( const char in idArray ) idBufferView[ char ] = idArray[ char ].codePointAt( 0 )

        output_id = idBuffer
    }
} )

export default id[ idSymbol ]
