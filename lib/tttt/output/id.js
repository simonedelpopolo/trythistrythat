import { randomUUID } from 'crypto'
import { stringFromBuffer } from '../../../index.js'

/**
 * @type {ArrayBuffer}
 */
export let output_id

/**
 * Object [ tttt.output.id ] generation.
 */
export function output_generator_id ( ) {

    let idArray = Array.from( randomUUID() )

    const idBuffer = new ArrayBuffer( idArray.length )
    const idBufferView = new Uint8Array( idBuffer )

    for ( const char in idArray ) idBufferView[ char ] = idArray[ char ].codePointAt( 0 )

    output_id = idBuffer
}

/**
 * Getter.
 *
 * @returns {string}
 */
export function output_id_get(){
    return stringFromBuffer( output_id )
}
