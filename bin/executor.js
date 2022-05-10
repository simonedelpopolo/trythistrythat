import { Blaze } from '@cli-blaze/decors'
import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import init from '../lib/tttt/queue/init.js'
import output_event from '../lib/tttt/output/event.js'
import { default as output_failed } from '../lib/tttt/output/failed.js'
import queue_container from '../lib/tttt/queue/container.js'
import timer_end from '../lib/tttt/timer/end.js'
import timer_start from '../lib/tttt/timer/start.js'
import { async_, oftype_, OftypesError, resolvers } from 'oftypes'
import { describe, end_test, line, separator } from '../index.js'
import { isMainThread, parentPort } from 'worker_threads'

/**
 * Units execution handler.
 *
 * @param {string[]} units - array of filenames
 * @returns {Promise<void>}
 */
async function handler( units ){

  // - trace( threadId )
  output_event.on( 'queued', async () => {

    for ( const id in queue_container ) {

      timer_start()

      const UnitTest = queue_container[ id ]
      const AsyncFunctionUnitTest = UnitTest.asyncFunction
      const truthy = async () => {

        await separator()
        describe( `|                  ${Blaze.b_yellow( id )}        | ID ` )
        await separator()
        describe( Blaze.color( 240, 'filename' ), UnitTest.filename )
        await separator( 240, undefined, '*' )
        await line()

        output_event.on( id, async id => {
          await line()
          await separator()
          describe( `|                  ${Blaze.b_yellow( id )}        | ${ timer_end()} ` )
          await separator()

          delete queue_container[ id ]

          if( output_failed[ 0 ] )
            parentPort.postMessage( true )

          if( Object.keys( queue_container ).length === 0 )
            parentPort.close()
        } )
        await AsyncFunctionUnitTest( id )
      }

      const falsy = async () => {
        end_test( queue_container[ id ] )
        const oftype = await oftype_( AsyncFunctionUnitTest )
        await exit(
          `UNIT test in tttt must be exported as AsyncFunction.
<oftype>${ Blaze.red( oftype ) }</oftype>
<filename>${ Blaze.red( UnitTest.filename ) }</filename>
`,
          new OftypesError( 'Object [tttt.queue.execute] - error' ),
          error_code.TYPE
        )
      }

      ( await async_( AsyncFunctionUnitTest, await resolvers( truthy, falsy ) ) )()
    }
  } )

  await init( units )
}
if( !isMainThread ) parentPort.on( 'message', handler )


