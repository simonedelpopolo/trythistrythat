#!/usr/bin/env node --experimental-json-modules --experimental-import-meta-resolve
const overall_execution_time_start = process.hrtime.bigint()
import { access } from 'node:fs/promises'
import add from './lib/tttt/add.js'
import { Blaze } from '@cli-blaze/decors'
import { describe } from './index.js'
import { entry_point } from '@cli-blaze/input'
import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import file from './lib/tttt/file.js'
import { spawn } from 'node:child_process'
import tttt_process from './lib/input/tttt/tttt_process.js'
import unit from './lib/tttt/unit.js'
import { URL } from 'url'

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

  /**
   * @type {Promise<{[p: string]: any}>|{[p: string]: any}}
   */
  const tttt = await entry_point( process.argv, { executable:[ '4t' ], '4t':tttt_process } )

  if( typeof tttt !== 'undefined' && typeof tttt.command !== 'undefined' ){

    switch ( Object.entries( tttt.command )[ 0 ][ 0 ] ) {

      case 'add':

        await add( tttt.command.add )

        break

      case  'test':

        if( tttt.command.test.directory.path !== null ) {
          await unit( { twd: [ tttt.command.test.directory.path ], exclude: tttt.command.test.directory.exclude } )
          break
        }

        await file( tttt.command.test.file )

        break

      case 'unit':

        await unit( tttt.command.unit )

        break

      default:
        await exit( 'unknown error', undefined, error_code.INTERNAL )
        break
    }
  }
}

process.on( 'exit', () => describe( Blaze.yellow( 'overall execution time' ), Blaze.black( '|' ), Blaze.red( String( Number( process.hrtime.bigint() - overall_execution_time_start ) / 1_000_000 + 'ms' ) ) ) )
