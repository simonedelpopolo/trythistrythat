import { end_test } from '../../../tttt.js'
import { promise_ } from 'oftypes'
import { queue__ } from '../../exporter.js'
import { queue_container } from '../../../index.js'

const executeSymbol = Symbol( 'Object [ queue__.execute ]' )
const execute = Object.defineProperty( queue__, executeSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * UNIT tests queue execution.
     *
     * @param {string} id - UNIT test id.
     * @returns {Promise<void>}
     */
    value: async function execute( id ) {

        const resolvers = {
            true:async () => {

                await queue_container[ 0 ][ id ]( id )
                queue_container.splice( 0, 1 )

            },
            false:() => {

                end_test( id )
                queue_container.splice( 0, 1 )
            }
        };

        ( await promise_( queue_container[ 0 ][ id ], resolvers ) )()
    },
} )

export default execute[ executeSymbol ]
