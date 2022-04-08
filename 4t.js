#!/usr/bin/env node
import {
    add,
    entry_point,
    file,
    unit
} from './index.js'

// - splicing out from `process.argv` the paths for node and 4t.js
process.argv.splice( 0, 2 )

// - process.title
process.title = '4t'

const entry_point_run = await entry_point( process.argv )

/**
 * @type {Promise | {
 * command:{
 *   add:{
 *       describe: string,
 *       filename:string,
 *       imports:string[],
 *       twd: string
 *   },
 *   test:{
 *     file: {
 *       filename: string
 *     }
 *   },
 *   unit:{
 *       twd: string[],
 *       exclude: string[]
 *   }
 * }}}
 */
const tttt = await entry_point_run

if( typeof tttt !== 'undefined' && typeof tttt?.command !== 'undefined' ){

    // eslint-disable-next-line default-case
    switch ( Object.entries( tttt.command )[ 0 ][ 0 ] ) {

        case 'add':

            await add( tttt.command.add )

            break

        case  'test':

            await file( tttt.command.test.file )

            break

        case 'unit':

            await unit( tttt.command.unit )

            break


    }
}
