import tttt from '../tttt.js'
import { describe, line, separator } from '../../public.js'
import {
    output_event,
    output_failed,
    output_id_get,
    queue_container,
    timer_end,
    timer_start
} from '../../index.js'

const outputSymbol = Symbol.for( 'Object [ tttt.output ]' )
const output = Object.defineProperty( tttt[ Symbol.for( 'tttt' ) ], outputSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.output ]
     * stdout the UNIT tests output.
     *
     * @returns {Promise<void>|void}
     */
    value: async function output(){

        timer_start()

        await line()

        await separator()
        await describe( '| assert', ` ${output_id_get()} `.b_yellow(), new Date(), ' |' )
        await separator()

        await line()

        output_event.on( output_id_get(), async id => {

            await line()
            await separator()
            await describe( `|                  ${id.b_yellow()}        | ${ timer_end()} ` )
            await separator()

            delete queue_container[ id ]
            if( output_failed[ 0 ] )
                process.exit( 1 )

        } )
    }
} )

export default output[ outputSymbol ]
