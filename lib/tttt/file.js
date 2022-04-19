import { error_code } from '@cli-blaze/error'
import execute from './queue/execute.js'
import { exit } from '@cli-blaze/activity'
import loader_set from './loader/set.js'
import output from './output.js'
import output_event from './output/event.js'
import { stat } from 'node:fs/promises'
import { stringFromBuffer } from '../../index.js'
import tttt_twd_get from './twd/get.js'
import { null_, OftypesError, resolvers } from 'oftypes'

/**
 * Object [ tttt.file ] loads the given assertion file and runs the test.
 *
 * @param {{filename: string|null}} options - the file to be run.
 * @returns {Promise<void> | void}
 */
export default async function file( options ){

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

        const path = `${ process.cwd() }/${ stringFromBuffer( tttt_twd_get() ) }/${ options.filename }`

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
