import { output_failed } from './index.js'
import {
    deeeeep__,
    describe__,
    end_test__,
    line__,
    oki__,
    separator__,
} from './lib/exports.js'

/**
 * Object [ tttt.output ]
 */
/**
 * Object [ tttt.output.describe ]
 * Describes something, prints values, Object or simply whatever.
 *
 * @param {...*} info - to be printed to stdout
 * @returns {*}
 */
export function describe ( ...info ) {
    return describe__( ...info )
}

/**
 * Object [ tttt.output.line ]
 * stdout new line.
 *
 * @param {number=} [repeat=undefined] - number of new lines.
 * @returns {Promise<void> | void}
 */
export async function line ( repeat = undefined ) {
    return line__( repeat )
}

/**
 * Object [ tttt.output.separator ]
 * Draws a separator. Default cyan. Default length 75. Default char '-'.
 *
 * @param {number=} [color=undefined] - of the line ( range accepted [ 0-255 ] )
 * @param {number=} [length=75] - of the line [no-length-limit]
 * @param {string=} [char='-'] - to be drawn as a line
 *                             - ( limited to these selection ['-','*','_','~'] )
 *                             - ( char.length === 1 no more no less )
 * @returns {Promise<void> | void}
 */
export async function separator( color = undefined, length = 75, char = '-' ) {
    return separator__( color, length, char )
}

/**
 * Tells if the test has failed or not.
 *
 * @param {boolean} status - unit test. Default false. set it to true when the test fails.
 */
export function failed( status ){
    output_failed[ 0 ] = status
}

/**
 * EventEmitter for ending UNIT test.
 *
 * @fires {randomUUID=unit-test-id}
 * @param {string} id - UNIT test
 */
export function end_test( id ){
    end_test__( id )
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

/**
 * A node:assert.ok wrapper.
 *
 * @param {()=>{}} func - a test function.
 * @returns {AssertionError|boolean}
 */
export async function oki( func ){
    return oki__( func )
}
