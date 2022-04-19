import { ok } from 'node:assert'

/**
 * A node:assert.ok wrapper.
 *
 * @param {()=>Promise} logic_function - a test function.
 * @returns {AssertionError|boolean}
 */
export async function oki( logic_function ){

    let { expected, actual, error } = await logic_function()
    let assert = true

    try{
        error = ! error ? undefined : new Error( error )
        ok( expected === actual, error )

    }catch ( assertion_error ) {

        assert = assertion_error

    }

    return assert

}
