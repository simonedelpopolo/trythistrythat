import output_event from './output/event.js'
import { default as output_failed } from './output/failed.js'
import { output_id_get } from './output/id.js'
import queue_container from './queue/container.js'
import timer_end from './timer/end.js'
import timer_start from './timer/start.js'
import { describe, line, separator } from '../../index.js'

/**
 * Object [ tttt.output ]
 * stdout the UNIT tests output.
 *
 * @returns {Promise<void>|void}
 */
export default async function output(){

    timer_start()

    await line()

    await separator()
    await describe( '| assert', ` ${ output_id_get() } `.b_yellow(), new Date(), ' |' )
    await separator()

    await line()

    output_event.on( output_id_get(), async id => {

        await line()
        await separator()
        describe( `|                  ${id.b_yellow()}        | ${ timer_end()} ` )
        await separator()

        delete queue_container[ id ]
        if( output_failed[ 0 ] )
            process.exit( 1 )

    } )
}
