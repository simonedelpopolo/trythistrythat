import * as tttt from '../../index.js'
import { Blaze } from '@cli-blaze/decors'
import { error_ } from 'oftypes'
import { spawn } from 'node:child_process'
import { trace } from '@cli-blaze/activity'
import { Writable } from 'node:stream'

/**
 * Module filename - /Volumes/code/trythistrythat/tests/tttt.version.test.correctly.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# test version flag correctly' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    const myWritable = new Writable( {
        async write( v ) {
            const version = Buffer.from( await ( await import( '../../package.json', { assert: { type: 'json' } } ) ).default.version )
            const result = await tttt.deeeeepStrictEqual( async() => {

                trace( Blaze.blue( `flag: ${v.slice( 0, -1 )}` ), Blaze.magenta( `package: ${version}` ) )

                return {
                    actual: v.slice( 0, -1 ),
                    expected: version
                }
            } )

            if( await error_( result ) ) {
                tttt.failed( true )
                tttt.describe( Blaze.red( 'failed' ) )
            }
            else tttt.describe( Blaze.green( 'passed' ) )
        }
    } )
    const ttttProcess = spawn( './4t.js', [ '--version' ] )
    ttttProcess.stdout.pipe( myWritable )

    ttttProcess.on( 'exit', () => tttt.end_test( id ) )

}
