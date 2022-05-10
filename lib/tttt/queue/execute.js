import { Blaze } from '@cli-blaze/decors'
import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import queue_container from '../queue/container.js'
import { async_, oftype_, OftypesError, resolvers } from 'oftypes'
import { describe, end_test, line, separator } from '../../../index.js'

/**
 * Object [ tttt.queue.execute ]
 * UNIT tests queue execution.
 *
 * @param {string} id - UNIT test id.
 * @returns {Promise<void>|void}
 */
export default async function execute( id ) {

  const UnitTest = queue_container[ id ]
  const AsyncFunctionUnitTest = UnitTest.asyncFunction
  const truthy = async () => {

    describe( Blaze.color( 240, 'filename' ), UnitTest.filename )
    await separator( 240, undefined, '*' )
    await line()
    await AsyncFunctionUnitTest( id )
  }


  const falsy = async () => {
    end_test( id )
    const oftype = await oftype_( AsyncFunctionUnitTest )
    await exit(
      `UNIT test in tttt must be exported as AsyncFunction.
<oftype>${Blaze.red( oftype )}</oftype>
<filename>${Blaze.red( UnitTest.filename )}</filename>
`,
      new OftypesError( 'Object [tttt.queue.execute] - error' ),
      error_code.TYPE
    )
  }

  ( await async_( AsyncFunctionUnitTest, await resolvers( truthy, falsy ) ) )()
}
