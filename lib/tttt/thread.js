import { dirname } from 'node:path'
import { trace } from '@cli-blaze/activity'
import { unit_counter_container } from './queue/unit_counter.js'
import { Worker } from 'worker_threads'

/**
 * Object [ tttt.thread ]
 * send all the UNIT test files found in the twd, recursively to the workers.
 *
 * @returns {Promise<void> | void}
 */
export default async function thread() {

  let ttttWorkerAbsolutePath
  const ttttWorkerExecutable = '/bin/executor.js'
  const ttttModule = await import.meta.resolve( 'trythistrythat' ).catch( error => error )
  if( ttttModule instanceof Error )
    ttttWorkerAbsolutePath = `${process.cwd()}${ttttWorkerExecutable}`
  else
    ttttWorkerAbsolutePath = new URL( dirname( await import.meta.resolve( 'trythistrythat' ) ) ).pathname + ttttWorkerExecutable

  const ttttWorker = new Worker( ttttWorkerAbsolutePath )

  ttttWorker.on( 'error', trace )
  ttttWorker.postMessage( unit_counter_container )

}
