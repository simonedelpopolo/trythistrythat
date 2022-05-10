import add from './tttt/add.js'
import { Blaze } from '@cli-blaze/decors'
import { describe } from '../index.js'
import { entry_point } from '@cli-blaze/input'
import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import file from './tttt/file.js'
import { overall_execution_time_start } from '../4t.js'
import tttt_process from './input/tttt/tttt_process.js'
import unit from './tttt/unit.js'
import { unit_counter } from './tttt/queue/unit_counter.js'

/**
 * Initializer function.
 *
 * @returns {Promise<void>}
 */
export async function tttt(){

  /**
   * @type {Promise<{[p: string]: any}|string>|{[p: string]: any}|string}
   */
  const tttt = await entry_point( process.argv, { executable:[ '4t' ], '4t':tttt_process } )


  if( tttt === 'coverage' )
    return

  if( Object.keys( tttt.command ).length === 0 )
    await exit( 'no command provided' )

  switch ( Object.entries( tttt.command )[ 0 ][ 0 ] ) {

    case 'add':

      await add( tttt.command.add )

      break

    case  'test':

      if ( tttt.command.test.directory.path !== null ) {
        await unit_counter( { twd: [ tttt.command.test.directory.path ], exclude: tttt.command.test.directory.exclude } )
        await unit()
        break
      }

      await unit_counter( { twd: [ tttt.command.test.file.filename ], exclude: null } )
      await file()

      break

    case 'unit':

      await unit_counter( tttt.command.unit )
      await unit()

      break

    default:
      await exit( 'unknown error', undefined, error_code.INTERNAL )
      break
  }

  process.on( 'exit', () => describe( Blaze.yellow( 'overall execution time' ), Blaze.black( '|' ), Blaze.red( String( Number( process.hrtime.bigint() - overall_execution_time_start ) / 1_000_000 + 'ms' ) ) ) )


}
