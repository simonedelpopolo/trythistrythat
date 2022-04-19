import queue from '../queue.js'
import { output_generator_id, output_id_get } from '../output/id.js'

/**
 * Object [ tttt.loader.set ]
 * dynamically imports of the unit test into the queue.
 *
 * @type {Object}
 * @returns {Promise<void> | void}
 */
export default async function loader_set( filename ){
    output_generator_id()
    await queue( output_id_get(), ( await import( filename ) ).default, filename )
}
