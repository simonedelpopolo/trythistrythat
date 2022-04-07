import input from '../input.js'
import { tttt_process } from '../../input.js'
import { process_exit, shell_exit_codes } from '../../index.js'

const process_titleSymbol = Symbol( 'Object [ input.process_title ]' )
const process_title = Object.defineProperty( input, process_titleSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Switches process.title returning an object containing command, flags and options to be digested.
     * The returned Promise always resolves.
     *
     * @param {{object:{[p: string]: any}, keys:string[]}} process_parsed_argv - Object.
     * @yields
     * @returns {AsyncGenerator<Promise<{command: {[p:object]:any}}>>}
     */
    value: async function* selector ( process_parsed_argv ){

        const promise = {
            resolve: null,
            reject: false
        }

        switch( process.title ){

            case '4t':

                promise.resolve = await tttt_process( process_parsed_argv )

                break

            default:
                promise.reject = true

                break
        }

        yield new Promise( ( resolve ) => {

            if( promise.reject ) {
                let error = `\x1b[41m        process.title -> \`${ process.title }\` not recognize\x1b[0m\n`
                process_exit( error, new ReferenceError( 'internal-error' ), shell_exit_codes.internal ).catch( error => {throw error} )
            }

            resolve( promise.resolve )

        } )

    },
} )

export default process_title[ process_titleSymbol ]
