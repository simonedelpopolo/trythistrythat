import { deeeeep__, oki__, output__ } from './lib/exporter.js'

/**
 * @param func
 */
export async function oki( func ){
    return oki__( func )
}

/**
 * @param {...any} info
 */
export async function describe( ...info ){
    return output__.describe( ...info )
}

/**
 * @param {...any} info
 */
export async function separator( ){
    return output__.separator( )
}

/**
 * @param status
 */
export function failed( status ){
    output__.failed = status
}

/**
 *
 */
export function end_test(){
    output__.event.emit( 'end' )
}

/**
 * @param func
 */
export async function deeeeepEqual( func ){
    return deeeeep__.equal( func )
}

/**
 * @param func
 */
export async function deeeeepStrictEqual( func ){
    return deeeeep__.strictEqual( func )
}
