import thread from './thread.js'

/**
 * Object [ tttt.unit ]
 * send all the UNIT test files found in the twd, recursively to the workers.
 *
 * @returns {Promise<void> | void}
 */
export default async function unit() {

  await thread()

}
