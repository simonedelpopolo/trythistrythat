import { basename } from 'node:path'
import { loader_set } from '../../../../index.js'
import { stat } from 'node:fs/promises'
import { unit_readdir } from './unit_readdir.js'

/**
 * Recursive read directories.
 * if the current path is a directory keep on digging!
 *
 * @param {string} path - directory
 * @param {string[]} excluded - filenames
 */
export async function unit_recursive( path, excluded ){

    let recursive_directory_listing = await unit_readdir( path )

    for ( const unit in recursive_directory_listing ){

        const filename = `${path}/${recursive_directory_listing[ unit ]}`
        const stats = await stat( filename )

        if( ! ( stats.isDirectory() ) ) {
            if( excluded !== null ){
                if( ! excluded.includes( basename( filename ) ) )
                    await loader_set( filename )
            }else await loader_set( filename )
        }

        else await unit_recursive( filename, excluded )
    }
}
