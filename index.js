import { default as failed_ } from './lib/tttt/output/failed.js'

export { default as describe } from './lib/tttt/output/describe.js'
export { end as end_test } from './lib/tttt/output/event/emitter/end.js'
export { default as line } from './lib/tttt/output/line.js'
export { oki } from './lib/tttt/assert/oki.js'
export { default as separator } from './lib/tttt/output/separator.js'
export { deeeeepEqual, deeeeepStrictEqual, notDeeeeepEqual, notDeeeeepStrictEqual } from './lib/tttt/assert/deeeeep.js'
export { default as resolvers } from './lib/tttt/assert/resolvers.js'

/**
 * Tells if the test has failed or not.
 *
 * @param {boolean} status - unit test. Default false. set it to true when the test fails.
 */
export const failed = status => {failed_[ 0 ] = status}

/**
 * String from buffer.
 *
 * @param { ArrayBuffer } buffer - to decode
 * @param {BufferEncoding=} [encoding=utf-8] - buffer encoding
 * @returns {string}
 */
export const stringFromBuffer = ( buffer, encoding ) => new TextDecoder( encoding || 'utf-8' ).decode( buffer ).replace( /\0/g, '' )

/**
 * JSDoc typedef
 */
/**
 * Represents an async function.
 *
 * @typedef {()=>Promise} AsyncFunction
 */
/**
 * OftypesError.
 *
 * @typedef {OftypesError} OftypesError
 */
