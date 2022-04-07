import { output_id } from './lib/tttt/output/id.js'
import {
    container__,
    entry_point__,
    execute__,
    exit__,
    file__,
    loader__,
    loader_set__,
    options__, output__,
    output_event__,
    output_failed__,
    output_generator_id__,
    process_title__,
    processor__,
    queue__,
    shell_exit_codes__,
    stderr__,
    timer_end__,
    timer_start__,
    tttt_twd_get__,
    tttt_twd_set__,
    twd__,
    unit__,
} from './lib/exports.js'

/**
 * Object [ activity ]
 *
 * @private
 */
/**
 * Exits with message and exit code.
 *
 * @param {string|Buffer} message - Required argument.
 * @param {Error} [error_type] - Default set to Error('koorie - InternalError').
 * @param {number} [exit_code=101] - Default set to 101, process exit code.
 * @returns {Promise<void>}
 */
export async function process_exit( message, error_type = Error( 'koorie - InternalError' ), exit_code = 101 ){
    return exit__( message, error_type, exit_code )
}

/**
 * Wrap to process.stderr.write.
 *
 * @param {Buffer|string} message - The message to the stderr.
 * @returns {Promise<string> | string}
 */
export async function stderr( message ){
    return stderr__( message )
}

/**
 * Object [ errors ]
 *
 * @private
 */
/**
 * @type {{commands: 1, flags: 2, type_checking:3,internal:4}}
 */
export const shell_exit_codes = shell_exit_codes__

/**
 * Object [ input ]
 *
 * @public
 */
/**
 * Object [input.entry_point].
 * Shared entry point for the available executable files.
 * Its return an object from the given process.argv.
 * Object [input.process_title] elaborates commands, flags and options dispatching to the right process switching the process.title.
 *
 * @param {string[]} argv - The process.argv passed to the process.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return#using_return
 * @returns {Promise | object} - return the return of the async function generator to set it "done" and free resources.
 */
export async function entry_point( argv ) {
    return entry_point__( argv )
}

/**
 * Switches process.title returning an object containing command, flags and options to be digested.
 * The returned Promise always resolves.
 *
 * @param {{object:{[p: string]: any}, keys:string[]}} process_parsed_argv - Object.
 * @returns {AsyncGenerator<Promise<{command: {[p:object]:any}}>>}
 */
export async function process_title( process_parsed_argv ) {
    return process_title__( process_parsed_argv )
}

/**
 * Object [ input.processor ] parses the process.argv string[] and returns an object.
 *
 * @param { string[] } argv - the given process.argv.
 * @returns { Promise<{ object:{ [ p: string ]: any }, keys:string[] }> }
 */
export async function processors( argv ){
    return processor__( argv )
}

/**
 * Object [ input.options ] parses, if any, the options given to the flag.
 *
 * @param { string }flag_value - the flag value passed to cli.
 * @param { string }flag_name - flag name in case of error while parsing the options.
 * @returns { Promise<{ [ p:string ]:{ [ p:string ], any} }> }
 */
export async function options( flag_value, flag_name ){
    return options__( flag_value, flag_name )
}

/**
 * Object [ tttt ]
 *
 * @private
 */

/**
 * Object [ tttt.timer.end ]
 * hrtime time-end returned.
 *
 * @returns {string}
 */
export function timer_end(){
    return timer_end__()
}

/**
 * Object [ tttt.timer.start ]
 * hrtime time-started.
 *
 * @returns {*}
 */
export function timer_start(){
    return timer_start__()
}

/**
 * Object [ tttt.output ]
 * stdout the UNIT tests output.
 *
 * @returns {Promise<void>|void}
 */
export async function output(){
    return output__()
}

/**
 * Object [ tttt.output.id ] generation.
 *
 * @returns {*}
 */
export function output_generator_id(){
    return output_generator_id__()
}

/**
 * Getter.
 *
 * @returns {string}
 */
export function output_id_get(){
    return output_id.stringFrom()
}

/**
 * Object [ tttt.output.event ] emitter.
 *
 * @type {EventEmitter}
 */
export const output_event = output_event__

/**
 * Object [ tttt.output.failed ]
 * UNIT test failure.
 *
 * @returns {boolean[]}
 */
export const output_failed = output_failed__

/**
 * Object [ tttt.loader.set ]
 * dynamically imports of the unit test into the queue.
 *
 * @type {Object}
 * @returns {Promise<void> | void}
 */
export async function loader_set( filename ){
    return loader_set__( filename )
}

/**
 * Object [ tttt.queue ]
 * UNIT tests queue management.
 *
 * @param {string} id - for UNIT test.
 * @param {AsyncFunction} unit - test
 * @param {string} filename - of UNIT test
 * @returns {Promise<void>|void}
 */
export async function queue( id, unit, filename ) {
    return queue__( id, unit, filename )
}

/**
 * Object [ tttt.queue.execute ]
 * UNIT tests queue execution.
 *
 * @param {string} id - UNIT test id.
 * @returns {Promise<void>|void}
 */
export async function execute( id ){
    return execute__( id )
}

/**
 * Object [ tttt.file ] loads the given assertion file and runs the test.
 *
 * @param {{filename: string|null}} options - the file to be run.
 * @returns {Promise<void> | void}
 */
export function file( options ){
    return file__( options )
}

/**
 * Object [ tttt.unit ]
 * Recursively executes all the UNIT test files found in the twd.
 *
 * @param {{twd:string[], exclude:string[]}} options - array from readdir
 * @returns {Promise<void> | void}
 */
export async function unit( options ){
    return unit__( options )
}

/**
 * @type {{[unknown:string]:{asyncFunction:AsyncFunction,filename:string}}}
 */
export const queue_container = container__

/**
 * Object [ tttt.twd ].
 *
 * @type {{set: ((function(string): AsyncGenerator<any, void, any>)), get(): Promise<string>}}
 */
export const twd = twd__

/**
 * Object [tttt.twd] experiment
 */
/**
 * Object [ tttt.twd.get ]
 * twd getter.
 *
 * @returns {ArrayBuffer}
 */
export function tttt_twd_get(){
    return tttt_twd_get__()
}

/**
 * Object [ tttt.twd.set ]
 * twd setter.
 *
 * @param {string} [path=tests] - test working directory
 * @throws
 * @returns {Promise<void>|void}
 */
export async function tttt_twd_set( path ){
    return tttt_twd_set__( path )
}

export const loader = loader__
