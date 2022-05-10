import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import { OftypesError } from 'oftypes'
import { stringFromBuffer } from '../../../index.js'
import { tttt_twd_flag } from './flag/tttt_twd_flag.js'
import tttt_twd_get from '../../tttt/twd/get.js'
import tttt_twd_set from '../../tttt/twd/set.js'
import { tttt_version_flag } from './flag/tttt_version_flag.js'
import { unit_readdir } from '../../tttt/unit/functions/unit_readdir.js'

/**
 * 4t process.
 *
 * @param {Object<{[unknown:string]: any}>} parsed - process.argv parsed.
 * @returns {Promise<Object<{command: {unit: {twd: string[], exclude: string[]}, test: {file: {filename: string}},directory:{path:string}}}>>}
 */
export default async function tttt_process( parsed ) {

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

        const twd = await tttt_twd_flag(
          parsed.object[ parsed.keys[ flag ] ]
        )
          .catch( async error => {
            await exit( '--twd accept only string.', error, error_code.FLAG )
          } )

        await tttt_twd_set( twd )
        delete parsed.object.twd
      }

        continue

      case 'add': {

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

        if( parsed.keys.includes( 'file' ) && parsed.keys.includes( 'directory' ) )
          await exit( 'test a file or a directory not both in the same time.', new ReferenceError( 'test command - error' ), error_code.COMMAND )

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

              tttt.command.test.directory.exclude = parsed.object[ testFlags[ flag ] ].split( ',' )

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

              tttt.command.unit.exclude = parsed.object[ unitFlags[ flag ] ].split( ',' )

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
