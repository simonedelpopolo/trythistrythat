import { dirname } from 'node:path'
import { trace } from '@cli-blaze/activity'
import { unit_counter_container } from './queue/unit_counter.js'
import { Worker } from 'worker_threads'

/**
 * Object [ tttt.file ] loads the given assertion file and runs the test.
 *
 * @returns {Promise<void> | void}
 */
export default async function file(){

  const ttttWorker = new Worker( new URL( dirname( await import.meta.resolve( 'trythistrythat' ) ) + '/bin/executor.js' ) )

  ttttWorker.on( 'error', trace )
  ttttWorker.postMessage( unit_counter_container )
}
