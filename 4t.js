#!/usr/bin/env node
import { access } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { URL } from 'url'
import {
    add,
    entry_point,
    file,
    unit
} from './index.js'

const tttt_executable = new URL( '', import.meta.url ).pathname

// - splicing out from `process.argv` the paths for node and 4t.js
process.argv.splice( 0, 2 )

if( process.argv.includes( '--coverage' ) ){
    process.argv.splice( process.argv.indexOf( '--coverage' ), 1 )

    let tttt_process = '4t'
    if ( await access( process.cwd() + '/node_modules/trythistrythat' ).catch( error => error ) instanceof Error )
        tttt_process = `${tttt_executable}`

    const spawn_argv = [ 'c8', tttt_process, process.argv ]
    spawn( 'npx', spawn_argv.flat(), {
        stdio:[ 'ignore', process.stdout, process.stderr ]
    } )
}
else{
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
}


