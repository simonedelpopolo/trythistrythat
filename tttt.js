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
 * @param status
 */
export function failed( status ){
    output__.failed = status
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