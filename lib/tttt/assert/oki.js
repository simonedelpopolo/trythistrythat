import { ok } from 'node:assert'

/**
 * A node:assert.ok wrapper.
 *
 * @param {()=>Promise} logic_function - a test function.
 * @returns {AssertionError|boolean}
 */
export async function oki( logic_function ){

  let { expected, actual, error_message } = await logic_function()
  let assert = true

  try{
    error_message = ! error_message ? undefined : new Error( error_message )
    ok( expected === actual, error_message )

  }catch ( assertion_error_message ) {

    assert = assertion_error_message

  }

  return assert

}
