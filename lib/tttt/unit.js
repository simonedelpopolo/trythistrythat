import { basename } from 'node:path'
import { stat } from 'node:fs/promises'
import tttt from '../tttt.js'
import { unit_recursive } from './unit/functions/unit_recursive.js'
import {
    execute,
    loader_set,
    output,
    output_event,
    tttt_twd_get
} from '../../index.js'

const unitSymbol = Symbol( 'Object [ tttt.unit ]' )
const unit = Object.defineProperty( tttt, unitSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.unit ]
     * Recursively executes all the UNIT test files found in the twd.
     *
     * @param {{twd:string[], exclude:string[]}} options - array from readdir
     * @returns {Promise<void> | void}
     */
    value: async function unit( options ) {

        output_event.on( 'queued', async ( id ) => {
            await output()
            await execute( id )
        } )

        const _twd = `${process.cwd()}/${tttt_twd_get().stringFrom()}`

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
} )

export default unit[ unitSymbol ]

