import { no_dot_regExp } from '../constant/no_dot_regExp.js'
import { readdir } from 'node:fs/promises'

/**
 * Object [ tttt.unit.functions.readdir ]
 * readdir excluded .dot files.
 *
 * @param {string} path - directory
 * @returns {Promise<string[]|string[]>}
 */
export async function unit_readdir( path ){
  return readdir( path ).then( directory_listing => directory_listing.filter( dot => ! no_dot_regExp.test( dot ) ) ).catch( error => { throw error } )
}
