import {
    tttt_process__,
    tttt_twd_flag__,
} from './lib/exports.js'

/**
 * 4t process.
 *
 * @param {Object<{[unknown:string]: any}>} process_parsed_argv - process.argv parsed.
 * @returns {Promise<Object<{command: {unit: {twd: string[], exclude: string[]}, test: {file: {filename: string}}}}>>}
 */
export async function tttt_process( process_parsed_argv ) {
    return tttt_process__( process_parsed_argv )
}

/**
 * Object [ input.tttt_twd_flag ].
 *
 * - twd_flag type check.
 *
 * @param {string} options - the value from the shell.
 * @throws { Error }
 * @returns {Promise<string|OftypesError|undefined>|string|OftypesError|undefined}
 */
export function tttt_twd_flag( options ){
    return tttt_twd_flag__ ( options )
}
