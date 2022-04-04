import { basename } from 'node:path'
import { output__ } from '../exporter.js'
import tttt from '../tttt.js'
import { execute, loader, twd } from '../../index.js'
import { readdir, stat } from 'node:fs/promises'

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

        /**
         * Recursive read directories.
         * if the current path is a directory keep on digging!
         *
         * @param {string} path - given filename path
         */
        async function recursive( path ){
            // - no dots file.
            let sub_dir_listing_ = await readdir( path ).then( directory_listing => directory_listing.filter( dot => !/(^|\/)\.[^/.]/g.test( dot ) ) )

            for ( const unit in sub_dir_listing_ ){

                const filename = `${path}/${sub_dir_listing_[ unit ]}`
                const stats = await stat( filename )

                if( ! ( stats.isDirectory() ) ) {
                    if( options.exclude !== null ){
                        if( ! options.exclude.includes( basename( filename ) ) )
                            await loader.set( filename )
                    }else await loader.set( filename )
                }

                else await recursive( filename )
            }
        }

        output__.event.on( 'inserted', async ( id ) => {
            await output__.stdout( id )
            await execute( id )
        } )

        const _twd = `${process.cwd()}/${await twd.get()}`

        for ( const unit in options.twd ){

            const filename = `${_twd}/${options.twd[ unit ]}`
            const stats = await stat( filename )

            if( ! ( stats.isDirectory() ) ) {
                if( options.exclude !== null ){
                    if( ! options.exclude.includes( basename( filename ) ) )
                        await loader.set( filename )
                }else await loader.set( filename )
            }

            else await recursive( filename )
        }

    }
} )

export default unit[ unitSymbol ]

