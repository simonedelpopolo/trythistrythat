import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import { stringFromBuffer } from '../../../index.js'
import { tttt_twd_flag } from './flag/tttt_twd_flag.js'
import tttt_twd_get from '../../tttt/twd/get.js'
import tttt_twd_set from '../../tttt/twd/set.js'
import { unit_readdir } from '../../tttt/unit/functions/unit_readdir.js'

/**
 * 4t process.
 *
 * @param {Object<{[unknown:string]: any}>} process_parsed_argv - process.argv parsed.
 * @returns {Promise<Object<{command: {unit: {twd: string[], exclude: string[]}, test: {file: {filename: string}},directory:{path:string}}}>>}
 */
export default async function tttt_process( process_parsed_argv ) {

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

        if ( !( process_parsed_argv.keys.includes( tttt_commandKeys[ selected_command ] ) ) )
            delete tttt.command[ tttt_commandKeys[ selected_command ] ]
    }

    for ( const flag in process_parsed_argv.keys ) {

        switch ( process_parsed_argv.keys[ flag ] ) {

            case 'twd': {

                const twd = await tttt_twd_flag(
                    process_parsed_argv.object[ process_parsed_argv.keys[ flag ] ]
                )
                    .catch( async error => {
                        await exit( '--twd accept only string.', error, error_code.FLAG )
                    } )

                await tttt_twd_set( twd )
                delete process_parsed_argv.object.twd
            }

                continue

            case 'add': {

                delete process_parsed_argv.object.add
                process_parsed_argv.keys.splice( 0, 1 )

                if ( !tttt_twd_get() )
                    await tttt_twd_set()

                tttt.command.add.twd = `${ process.cwd() }/${ stringFromBuffer( tttt_twd_get() ) }`

                const addFlags = Object.keys( process_parsed_argv.object )

                for ( const flag in addFlags ) {

                    switch ( addFlags[ flag ] ) {

                        case 'describe': {

                            tttt.command.add.describe = process_parsed_argv.object[ addFlags[ flag ] ]

                            delete process_parsed_argv.object[ addFlags[ flag ] ]
                            process_parsed_argv.keys.splice( 0, 1 )
                        }
                            continue

                        case 'filename': {

                            tttt.command.add.filename = process_parsed_argv.object[ addFlags[ flag ] ]

                            delete process_parsed_argv.object[ addFlags[ flag ] ]
                            process_parsed_argv.keys.splice( 0, 1 )
                        }
                            continue

                        case 'imports': {

                            tttt.command.add.imports = process_parsed_argv.object[ addFlags[ flag ] ].split( ',' )

                            delete process_parsed_argv.object[ addFlags[ flag ] ]
                            process_parsed_argv.keys.splice( 0, 1 )
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

                if( process_parsed_argv.keys.includes( 'file' ) && process_parsed_argv.keys.includes( 'directory' ) )
                    await exit( 'test a file or a directory not both in the same time.', new ReferenceError( 'test command - error' ), error_code.COMMAND )

                if ( ! tttt_twd_get() )
                    await tttt_twd_set()

                delete process_parsed_argv.object.test
                process_parsed_argv.keys.splice( 0, 1 )

                const testFlags = Object.keys( process_parsed_argv.object )
                for ( const flag in testFlags ) {

                    switch ( testFlags[ flag ] ) {

                        case 'directory': {

                            tttt.command.test.directory.path = process_parsed_argv.object[ testFlags[ flag ] ]

                            delete process_parsed_argv.object[ testFlags[ flag ] ]
                            process_parsed_argv.keys.splice( 0, 1 )
                        }
                            continue

                        case 'exclude': {

                            tttt.command.test.directory.exclude = process_parsed_argv.object[ testFlags[ flag ] ].split( ',' )

                            delete process_parsed_argv.object[ testFlags[ flag ] ]
                            process_parsed_argv.keys.splice( 0, 1 )
                        }
                            continue

                        case 'file': {

                            tttt.command.test.file.filename = process_parsed_argv.object[ testFlags[ flag ] ]

                            delete process_parsed_argv.object[ testFlags[ flag ] ]
                            process_parsed_argv.keys.splice( 0, 1 )
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

                delete process_parsed_argv.object.unit
                process_parsed_argv.keys.splice( 0, 1 )

                if ( !tttt_twd_get() )
                    await tttt_twd_set()

                const twd = `${ process.cwd() }/${ stringFromBuffer( tttt_twd_get() ) }`

                tttt.command.unit.twd = await unit_readdir( twd )

                const unitFlags = Object.keys( process_parsed_argv.object )

                for ( const flag in unitFlags ) {

                    switch ( unitFlags[ flag ] ) {

                        case 'exclude': {

                            tttt.command.unit.exclude = process_parsed_argv.object[ unitFlags[ flag ] ].split( ',' )

                            delete process_parsed_argv.object[ unitFlags[ flag ] ]
                            process_parsed_argv.keys.splice( 0, 1 )
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

                let error = `\x1b[41m        Object[ input.process_title ]: command \`${ process_parsed_argv.keys[ flag ] }\` not recognize\x1b[0m\n`
                error += `\x1b[41m        run -> ${ process.title } help[h]        \x1b[0m\n`
                await exit( error, new ReferenceError( `${ process.title } commands-error` ), error_code.FLAG )
            }
        }
    }

    return tttt
}
