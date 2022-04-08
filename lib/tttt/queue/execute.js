import { default as queue } from '../queue.js'
import { async_, oftype_, OftypesError, resolvers } from 'oftypes'
import { describe, end_test, line, separator } from '../../../public.js'
import { process_exit, queue_container, shell_exit_codes } from '../../../index.js'

const executeSymbol = Symbol.for( 'Object [ tttt.queue.execute ]' )
const execute = Object.defineProperty( queue, executeSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.queue.execute ]
     * UNIT tests queue execution.
     *
     * @param {string} id - UNIT test id.
     * @returns {Promise<void>|void}
     */
    value: async function execute( id ) {

        const UnitTest = queue_container[ id ]
        const AsyncFunctionUnitTest = UnitTest.asyncFunction
        const truthy = async () => {

            describe( 'filename'.color( 240 ), UnitTest.filename )
            await separator( 240, undefined, '*' )
            await line()
            await AsyncFunctionUnitTest( id )
        }


        const falsy = async () => {
            await end_test( id )
            const oftype = await oftype_( AsyncFunctionUnitTest )
            await process_exit(
                `UNIT test in tttt must be exported as AsyncFunction.
<oftype>${oftype.red()}</oftype>
<filename>${UnitTest.filename.red()}</filename>
`,
                new OftypesError( 'Object [tttt.queue.execute] - error' ),
                shell_exit_codes.type_checking
            )
        }

        ( await async_( AsyncFunctionUnitTest, await resolvers( truthy, falsy ) ) )()
    },
} )

export default execute[ executeSymbol ]
