import { basename } from 'node:path'
import { stat } from 'node:fs/promises'
import { stringFromBuffer } from '../../../index.js'
import tttt_twd_get from '../twd/get.js'
import { unit_recursive_counter } from './functions/unit_recursive_counter.js'

export const unit_counter_container = []

/**
 * Recursively count all the UNIT test files found in the twd.
 *
 * @param {{twd:string[], exclude:string[]|null}} options - array from readdir
 * @returns {Promise<void> | void}
 */
export async function unit_counter( options ){

  const _twd = `${process.cwd()}/${stringFromBuffer( tttt_twd_get() )}`

  for ( const unit in options.twd ){

    const filename = `${_twd}/${options.twd[ unit ]}`
    const stats = await stat( filename )

    if( ! ( stats.isDirectory() ) ) {
      if( options.exclude !== null ){
        if( ! options.exclude.includes( basename( filename ) ) )
          unit_counter_container.push( filename )
      }else unit_counter_container.push( filename )
    }

    else if( stats.isDirectory() ) {
      if( options.exclude !== null ){
        if( ! options.exclude.includes( basename( filename ) ) )
          await unit_recursive_counter( filename, options.exclude )
      }else await unit_recursive_counter( filename, options.exclude )
    }
  }
}
