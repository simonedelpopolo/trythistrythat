import { output_id } from './lib/tttt/output/id.js'
import {
    add__,
    container__,
    execute__,
    file__,
    loader__,
    loader_set__,
    output__,
    output_event__,
    output_failed__,
    output_generator_id__,
    queue__,
    timer_end__,
    timer_start__,
    tttt_process__,
    tttt_twd_get__,
    tttt_twd_set__,
    twd__,
    unit__,
} from './lib/exports.js'

/**
 * Object [ input.process_title.tttt_process ]
 */
/**
 * 4t process.
 *
 * @param {Object<{[unknown:string]: any}>} process_parsed_argv - process.argv parsed.
 * @returns {Promise<Object<{command: {unit: {twd: string[], exclude: string[]}, test: {file: {filename: string}},directory:{path:string}}}>>}
 */
export async function tttt_process( process_parsed_argv ){
    return tttt_process__[ Symbol.for( 'input.process_title.tttt_process' ) ]( process_parsed_argv )
}

/**
 * Object [ tttt ]
 *
 * @private
 */

/**
 * Object [ tttt.add ]
 * adding unit test
 *
 * @param {{describe: string|null=,filename:string|null=,imports:string[]|null=,twd: string|null=}} options - from shell
 * @returns {Promise<void> | void}
 */
export async function add( options ) {
    return add__( options )
}

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
