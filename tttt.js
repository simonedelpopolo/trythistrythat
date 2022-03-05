import { deeeeep__, oki__, output__ } from './lib/exporter.js'

/**
 * A node:assert.ok wrapper.
 *
 * @param {()=>{}} func - a test function.
 * @returns {AssertionError|boolean}
 */
export async function oki( func ){
    return oki__( func )
}

/**
 * Describe the statements that are going to be executed.
 *
 * @param {any} info - .
 */
export function describe( ...info ){
    return output__.describe( ...info )
}

/**
 *
 */
export function id(){
    return output__.id
}

/**
 * Drawn a separator line.
 *
 */
export function separator( ){
    return output__.separator( )
}

/**
 * Tells if the test has failed or not.
 *
 * @param {boolean} status - the test status. Default false. set it to true when the test fails.
 */
export function failed( status ){
    output__.failed = status
}

/**
 * Call this when the test is over.
 *
 * @param id
 */
export function end_test( id ){
    output__.event.emit( id )
}

/**
 * A node:assert.deepEqual wrapper.
 *
 * @param {()=>{}} func - a test function.
 * @returns {AssertionError|boolean}
 */
export async function deeeeepEqual( func ){
    return deeeeep__.equal( func )
}

/**
 * A node:assert.notDeepEqual wrapper.
 *
 * @param {()=>{}} func - a test function.
 * @returns {AssertionError|boolean}
 */
export async function notDeeeeepEqual( func ){
    return deeeeep__.notEqual( func )
}

/**
 * A node:assert.deepStrictEqual wrapper.
 *
 * @param {()=>{}} func - a test function.
 * @returns {AssertionError|boolean}
 */
export async function deeeeepStrictEqual( func ){
    return deeeeep__.strictEqual( func )
}

/**
 * A node:assert.notDeepStrictEqual wrapper.
 *
 * @param {()=>{}} func - a test function.
 * @returns {AssertionError|boolean}
 */
export async function notDeeeeepStrictEqual( func ){
    return deeeeep__.notStrictEqual( func )
}
