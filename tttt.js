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
 * @returns {*}
 */
export function describe( ...info ){
    return output__.describe( ...info )
}

/**
 * The unit test id.
 *
 * @returns {*}
 */
export function id(){
    return output__.id
}

/**
 * Drawn a separator line.
 *
 * @returns {*}
 */
export function separator( ){
    return output__.separator( )
}

/**
 * It draws a new line or many as specified with the argument repeat.
 *
 * @param {number=} [repeat=undefined] - number of new lines. undefined/0/1 it console.log() just one time
 * @returns {*}
 */
export function line( repeat = undefined ){
    return output__.line( repeat )
}

/**
 * Tells if the test has failed or not.
 *
 * @param {boolean} status - unit test. Default false. set it to true when the test fails.
 */
export function failed( status ){
    output__.failed = status
}

/**
 * Call this when the test is over.
 *
 * @param {string} id - unit test
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
