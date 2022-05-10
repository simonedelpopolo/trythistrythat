import { undefined_ } from 'oftypes'
import { deepEqual, deepStrictEqual, notDeepEqual, notDeepStrictEqual } from 'node:assert'

/**
 * A node:assert.deepEqual wrapper.
 *
 * @param {()=>Promise} logic_function - a test function.
 * @returns {AssertionError|boolean}
 */
export async function deeeeepEqual( logic_function ){

  let { expected, actual, error_message } = await logic_function()

  let assert = true

  try{
    error_message = await undefined_( error_message ) ? undefined : new Error( error_message )
    deepEqual(  actual, expected, error_message )

  }catch ( assertion_error_message ) {

    assert = assertion_error_message

  }

  return assert
}


/**
 * A node:assert.notDeepEqual wrapper.
 *
 * @param {()=>Promise} logic_function - a test function.
 * @returns {AssertionError|boolean}
 */
export async function notDeeeeepEqual( logic_function ){

  let { expected, actual, error_message } = await logic_function()

  let assert = true

  try{
    error_message = await undefined_( error_message ) ? undefined : new Error( error_message )
    notDeepEqual(  actual, expected, error_message )

  }catch ( assertion_error_message ) {

    assert = assertion_error_message

  }

  return assert
}

/**
 * A node:assert.deepStrictEqual wrapper.
 *
 * @param {()=>Promise} logic_function - a test function.
 * @returns {AssertionError|boolean}
 */
export async function deeeeepStrictEqual ( logic_function ){

  let { expected, actual, error_message } = await logic_function()
  let assert = true

  try{
    error_message = await undefined_( error_message ) ? undefined : new Error( error_message )
    deepStrictEqual(  actual, expected, error_message )

  }catch ( assertion_error_message ) {

    assert = assertion_error_message

  }

  return assert
}

/**
 * A node:assert.notDeepStrictEqual wrapper.
 *
 * @param {()=>Promise} logic_function - a test function.
 * @returns {AssertionError|boolean}
 */
export async function notDeeeeepStrictEqual( logic_function ){

  let { expected, actual, error_message } = await logic_function()

  let assert = true

  try{
    error_message = await undefined_( error_message ) ? undefined : new Error( error_message )
    notDeepStrictEqual(  actual, expected, error_message )

  }catch ( assertion_error_message ) {

    assert = assertion_error_message

  }

  return assert
}




