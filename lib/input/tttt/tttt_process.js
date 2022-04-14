import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import { options } from '@cli-blaze/input'
import { default as process_title } from '@cli-blaze/input/lib/input/process_title.js'
import { tttt_twd_flag } from '../../../input.js'
import { unit_readdir } from '../../tttt/unit/functions/unit_readdir.js'
import {
    tttt_twd_get,
    tttt_twd_set
} from '../../../index.js'

export default Object.defineProperties( process_title[ Symbol.for( 'input.process_title' ) ], {
    [ Symbol.for( 'input.process_title.tttt_process' ) ]: {
        enumerable: true,
        writable: false,
        configurable: false,

        /**
         * 4t process.
         *
         * @param {Object<{[unknown:string]: any}>} process_parsed_argv - process.argv parsed.
         * @returns {Promise<Object<{command: {unit: {twd: string[], exclude: string[]}, test: {file: {filename: string}}}}>>}
         */
        value: async function tttt_process( process_parsed_argv ) {

            const tttt = {
                command: {
                    test: {
                        file: { filename: null },
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

                        tttt.command.add.twd = `${ process.cwd() }/${ tttt_twd_get().stringFrom() }`

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

                        if ( !tttt_twd_get() )
                            await tttt_twd_set()

                        delete process_parsed_argv.object.test
                        process_parsed_argv.keys.splice( 0, 1 )

                        const testFlags = Object.keys( process_parsed_argv.object )
                        for ( const flag in testFlags ) {

                            switch ( testFlags[ flag ] ) {

                                case 'file': {

                                    let { filename, error } = await options( process_parsed_argv.object[ testFlags[ flag ] ], '--file='.green().underline() )

                                    if ( error instanceof Error )
                                        await exit( error.message, Error( `${ process.title } flags-error` ), error_code.FLAG )

                                    tttt.command.test.file.filename = filename

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

                        const twd = `${ process.cwd() }/${ tttt_twd_get().stringFrom() }`

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
    },
} )
