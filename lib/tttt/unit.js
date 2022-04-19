import { basename } from 'node:path'
import execute from './queue/execute.js'
import loader_set from './loader/set.js'
import output from './output.js'
import output_event from './output/event.js'
import { stat } from 'node:fs/promises'
import { stringFromBuffer } from '../../index.js'
import tttt_twd_get from './twd/get.js'
import { unit_recursive } from './unit/functions/unit_recursive.js'

/**
 * Object [ tttt.unit ]
 * Recursively executes all the UNIT test files found in the twd.
 *
 * @param {{twd:string[], exclude:string[]}} options - array from readdir
 * @returns {Promise<void> | void}
 */
export default async function unit( options ) {

    output_event.on( 'queued', async ( id ) => {
        await output()
        await execute( id )
    } )

    const _twd = `${process.cwd()}/${stringFromBuffer( tttt_twd_get() )}`

    for ( const unit in options.twd ){

        const filename = `${_twd}/${options.twd[ unit ]}`
        const stats = await stat( filename )

        if( ! ( stats.isDirectory() ) ) {
            if( options.exclude !== null ){
                if( ! options.exclude.includes( basename( filename ) ) )
                    await loader_set( filename )
            }else await loader_set( filename )
        }

        else if( stats.isDirectory() ) {
            if( options.exclude !== null ){
                if( ! options.exclude.includes( basename( filename ) ) )
                    await unit_recursive( filename, options.exclude )
            }else await unit_recursive( filename, options.exclude )
        }
    }
}
