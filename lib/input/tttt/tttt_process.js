import { Blaze } from '@cli-blaze/decors'
import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import { OftypesError } from 'oftypes'
import { spawn } from 'node:child_process'
import { tttt_add_command } from './command/add/tttt_add_command.js'
import { tttt_exclude_flag } from './command/shared/tttt_exclude_flag.js'
import { tttt_test_command } from './command/test/tttt_test_command.js'
import { tttt_twd_flag } from './flag/tttt_twd_flag.js'
import tttt_twd_get from '../../tttt/twd/get.js'
import tttt_twd_set from '../../tttt/twd/set.js'
import { tttt_unit_command } from './command/unit/tttt_unit_command.js'
import { tttt_version_flag } from './flag/tttt_version_flag.js'
import { unit_readdir } from '../../tttt/unit/functions/unit_readdir.js'
import { describe, stringFromBuffer } from '../../../index.js'
import { overall_execution_time_start, tttt_executable } from '../../../4t.js'

/**
 * 4t process.
 *
 * @param {Object<{[unknown:string]: any}>} parsed - process.argv parsed.
 * @returns {Promise<Object<{command: {unit: {twd: string[], exclude: string[]}, test: {file: {filename: string}},directory:{path:string}}}>|string>}
 */
export default async function tttt_process( parsed ) {

  // - --coverage flag spawn tttt process
  if( parsed.keys.includes( 'coverage' ) ) {

    process.argv.splice( process.argv.indexOf( '--coverage' ), 1 )

    let tttt_process = '4t'
    if ( await import.meta.resolve( 'trythistrythat' ).catch( error => error ) instanceof Error )
      tttt_process = `${tttt_executable}`

    const spawn_argv = [ 'c8', '--skip-full=true', tttt_process, process.argv ]
    const c8 = spawn( 'npx', spawn_argv.flat(), {
      stdio:[ 'ignore', process.stdout, process.stderr ]
    } )

    const c8Exit = code => {
      describe( Blaze.yellow( 'overall execution time' ), Blaze.black( '|' ), Blaze.red( String( Number( process.hrtime.bigint() - overall_execution_time_start ) / 1_000_000 + 'ms' ) ) )
      process.exit( code )
    }

    c8.on( 'exit', c8Exit )

    c8.on( 'error', async error => exit( error.message ) )

    return 'coverage'

  }

  const tttt = {
    command: {
      test: {
        file: { filename: null },
        directory: { path: null, exclude: null }
      },
      unit: {
        twd: null,
        exclude: null
      },
      add: {
        twd: null,
        filename: null,
        describe: null,
        imports: null
      }
    }
  }

  // - keep only the selected command and delete the others from Object<tttt.command>
  const tttt_commandKeys = Object.keys( tttt.command )
  for ( const selected_command in tttt_commandKeys ) {
    if ( !( parsed.keys.includes( tttt_commandKeys[ selected_command ] ) ) )
      delete tttt.command[ tttt_commandKeys[ selected_command ] ]
  }

  for ( const flag in parsed.keys ) {

    switch ( parsed.keys[ flag ] ) {

      case 'v':
      case 'version':

        for await ( const type of await tttt_version_flag( parsed.object[ parsed.keys[ flag ] ] ) ) {
          if ( type instanceof Error )
            await exit( type.message, new OftypesError( '♠︎' ), error_code.FLAG )
        }

        process.stdout.write( `${await ( await import( '../../../package.json', { assert: { type: 'json' } } ) ).default.version}\n` )
        process.exit( 0 )

        break

      case 'twd': {

        let twd = ''
        for await ( const type of await tttt_twd_flag( parsed.object[ parsed.keys[ flag ] ] ) ) {
          if ( type instanceof Error )
            await exit( type.message, new OftypesError( '♠︎' ), error_code.FLAG )

          twd = type
        }

        await tttt_twd_set( twd )
        delete parsed.object.twd
      }

        continue

      case 'add': {

        for await ( const type of await tttt_add_command( parsed.object[ parsed.keys[ flag ] ] ) ) {
          if ( type instanceof Error )
            await exit( type.message, new OftypesError( '♠︎' ), error_code.FLAG )
        }

        delete parsed.object.add
        parsed.keys.splice( 0, 1 )

        if ( !tttt_twd_get() )
          await tttt_twd_set()

        tttt.command.add.twd = `${ process.cwd() }/${ stringFromBuffer( tttt_twd_get() ) }`

        const addFlags = Object.keys( parsed.object )

        for ( const flag in addFlags ) {

          switch ( addFlags[ flag ] ) {

            case 'describe': {

              tttt.command.add.describe = parsed.object[ addFlags[ flag ] ]

              delete parsed.object[ addFlags[ flag ] ]
              parsed.keys.splice( 0, 1 )
            }
              continue

            case 'filename': {

              tttt.command.add.filename = parsed.object[ addFlags[ flag ] ]

              delete parsed.object[ addFlags[ flag ] ]
              parsed.keys.splice( 0, 1 )
            }
              continue

            case 'imports': {

              tttt.command.add.imports = parsed.object[ addFlags[ flag ] ].split( ',' )

              delete parsed.object[ addFlags[ flag ] ]
              parsed.keys.splice( 0, 1 )
            }
              continue

            default: {
              let error = `\x1b[41m        Object[ input.process_title ]: flag \`${ addFlags[ flag ] }\` not recognize\x1b[0m\n`
              error += `\x1b[41m        run -> ${ process.title } init help[h]        \x1b[0m\n`
              await exit( error, new ReferenceError( `${ process.title } flags-error` ), error_code.FLAG )
            }
          }
        }
      }
        break

      case 'test': {

        for await ( const type of await tttt_test_command( parsed.object[ parsed.keys[ flag ] ] ) ) {
          if ( type instanceof Error )
            await exit( type.message, new OftypesError( '♠︎' ), error_code.FLAG )
        }

        if( parsed.keys.includes( 'file' ) && parsed.keys.includes( 'directory' ) )
          await exit( 'test a file or a directory. not both in the same time.', new ReferenceError( 'test command - error' ), error_code.COMMAND )

        if ( ! tttt_twd_get() )
          await tttt_twd_set()

        delete parsed.object.test
        parsed.keys.splice( 0, 1 )

        const testFlags = Object.keys( parsed.object )
        for ( const flag in testFlags ) {

          switch ( testFlags[ flag ] ) {

            case 'directory': {

              tttt.command.test.directory.path = parsed.object[ testFlags[ flag ] ]

              delete parsed.object[ testFlags[ flag ] ]
              parsed.keys.splice( 0, 1 )
            }
              continue

            case 'exclude': {

              for await ( const type of await tttt_exclude_flag( parsed.object[ testFlags[ flag ] ] ) ) {
                if ( type instanceof Error )
                  await exit( type.message, new OftypesError( '♠︎' ), error_code.FLAG )

                tttt.command.test.directory.exclude = type.split( ',' )
              }

              delete parsed.object[ testFlags[ flag ] ]
              parsed.keys.splice( 0, 1 )
            }
              continue

            case 'file': {

              tttt.command.test.file.filename = parsed.object[ testFlags[ flag ] ]

              delete parsed.object[ testFlags[ flag ] ]
              parsed.keys.splice( 0, 1 )
            }
              continue

            default: {
              let error = `\x1b[41m        Object[ input.process_title ]: flag \`${ testFlags[ flag ] }\` not recognize\x1b[0m\n`
              error += `\x1b[41m        run -> ${ process.title } init help[h]        \x1b[0m\n`
              await exit( error, new ReferenceError( `${ process.title } flags-error` ), error_code.FLAG )
            }
          }
        }

      }
        break

      case 'unit': {

        for await ( const type of await tttt_unit_command( parsed.object[ parsed.keys[ flag ] ] ) ) {
          if ( type instanceof Error )
            await exit( type.message, new OftypesError( '♠︎' ), error_code.FLAG )
        }

        delete parsed.object.unit
        parsed.keys.splice( 0, 1 )

        if ( !tttt_twd_get() )
          await tttt_twd_set()

        const twd = `${ process.cwd() }/${ stringFromBuffer( tttt_twd_get() ) }`

        tttt.command.unit.twd = await unit_readdir( twd )

        const unitFlags = Object.keys( parsed.object )

        for ( const flag in unitFlags ) {

          switch ( unitFlags[ flag ] ) {

            case 'exclude': {
              for await ( const type of await tttt_exclude_flag( parsed.object[ unitFlags[ flag ] ] ) ) {
                if ( type instanceof Error )
                  await exit( type.message, new OftypesError( '♠︎' ), error_code.FLAG )

                tttt.command.unit.exclude = type.split( ',' )
              }

              delete parsed.object[ unitFlags[ flag ] ]
              parsed.keys.splice( 0, 1 )
            }
              continue

            default: {
              let error = `\x1b[41m        Object[ input.process_title ]: flag \`${ unitFlags[ flag ] }\` not recognize\x1b[0m\n`
              error += `\x1b[41m        run -> ${ process.title } init help[h]        \x1b[0m\n`
              await exit( error, new ReferenceError( `${ process.title } flags-error` ), error_code.FLAG )
            }
          }
        }
      }
        break

      default: {

        let error = `\x1b[41m        Object[ input.process_title ]: command \`${ parsed.keys[ flag ] }\` not recognize\x1b[0m\n`
        error += `\x1b[41m        run -> ${ process.title } help[h]        \x1b[0m\n`
        await exit( error, new ReferenceError( `${ process.title } commands-error` ), error_code.FLAG )
      }
    }
  }

  return tttt
}
