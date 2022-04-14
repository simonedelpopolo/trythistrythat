import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import { stat } from 'node:fs/promises'
import tttt from '../tttt.js'
import {
    execute,
    loader_set,
    output,
    output_event,
    tttt_twd_get
} from '../../index.js'
import {
    null_,
    OftypesError,
    resolvers
} from 'oftypes'

const fileSymbol = Symbol( 'Object [ tttt.file ]' )
const file = Object.defineProperty( tttt, fileSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.file ] loads the given assertion file and runs the test.
     *
     * @param {{filename: string|null}} options - the file to be run.
     * @returns {Promise<void> | void}
     */
    value: async function file( options ){

        /**
         * Resolver true.
         */
        const truthy = async () => exit( 'filename was <oftypes><null>', new OftypesError( 'Object [ tttt.file ] error' ), error_code.FLAG )

        /**
         * Resolver false.
         *
         * @returns {Promise<void>}
         */
        const falsy = async () => {

            const path = `${ process.cwd() }/${ tttt_twd_get().stringFrom() }/${ options.filename }`

            output_event.on( 'queued', async ( id ) => {
                await output()
                await execute( id )
            } )

            /**
             * @type {Stats|void}
             */
            const filename = await stat( path )
                .catch( async error => exit( error.message, new OftypesError( 'Object [ tttt.file ] node:fs/stat - error' ), error_code.INTERNAL ) )

            if( ! ( filename.isDirectory() ) ) await loader_set( path )
        }

        await ( await null_( options.filename, await resolvers( truthy, falsy ) ) )()
    }
} )

export default file[ fileSymbol ]
