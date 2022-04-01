import {
    container__,
    entry_point__,
    execute__,
    exit__,
    file__,
    loader__,
    options__,
    process_title__,
    processor__,
    queue__,
    shell_exit_codes__,
    stderr__,
    twd__,
    unit__,
} from './lib/exporter.js'

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
 * @returns {AsyncGenerator}
 */
export async function process_title( process_parsed_argv ) {
    return process_title__( process_parsed_argv )
}

/**
 * Object [ input.argv ] parses the process.argv string[] and returns an object.
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
 * UNIT tests queue handler.
 *
 * @param {string} id - UNIT test id.
 * @param {AsyncFunction} unit_test - the unit test async function.
 * @returns {Promise<void>}
 */
export async function queue( id, unit_test ){
    return queue__( id, unit_test )
}

/**
 * UNIT tests queue execution.
 *
 * @param {string} id - UNIT test id.
 * @returns {Promise<void>}
 */
export async function execute( id ){
    return execute__( id )
}

/**
 * Run all the files into Test Working Directory (twd).
 *
 * @param {string[]} dir_listing - array from readdir
 * @returns {Promise<*>}
 */
export async function unit( dir_listing ){
    return unit__( dir_listing )
}

/**
 * @type {[{[p:string]: AsyncFunction}]}
 */
export const queue_container = container__

/**
 * Object [ tttt.twd ].
 *
 * @type {{set: ((function(string): AsyncGenerator<any, void, any>)), get(): Promise<string>}}
 */
export const twd = twd__

/**
 * Object [ tttt.file ] loads the given assertion file and runs the test.
 *
 * @param {string} filename - the file to be run.
 * @returns {Promise<void>}
 */
export function file( filename ){
    return file__( filename )
}

export const loader = loader__
