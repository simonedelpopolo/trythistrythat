import { basename } from 'node:path'
import { stat } from 'node:fs/promises'
import { unit_counter_container } from '../unit_counter.js'
import { unit_readdir } from '../../unit/functions/unit_readdir.js'

/**
 * Recursive read directories.
 * if the current path is a directory keep on digging!
 *
 * @param {string} path - directory
 * @param {string[]} excluded - filenames
 */
export async function unit_recursive_counter( path, excluded ){

  let recursive_directory_listing = await unit_readdir( path )

  for ( const unit in recursive_directory_listing ){

    const filename = `${path}/${recursive_directory_listing[ unit ]}`
    const stats = await stat( filename )

    if( ! ( stats.isDirectory() ) ) {
      if( excluded !== null ){
        if( ! excluded.includes( basename( filename ) ) )
          unit_counter_container.push( filename )
      }else unit_counter_container.push( filename )

    }else if( stats.isDirectory() ) {
      if( excluded !== null ){

        if( ! excluded.includes( basename( filename ) ) )

          await unit_recursive_counter( filename, excluded )

      }else await unit_recursive_counter( filename, excluded )
    }

    else await unit_recursive_counter( filename, excluded )
  }
}
