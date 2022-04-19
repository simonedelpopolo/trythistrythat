import { deepEqual, deepStrictEqual, notDeepEqual, notDeepStrictEqual } from 'node:assert'

/**
 * A node:assert.deepEqual wrapper.
 *
 * @param {()=>Promise} logic_function - a test function.
 * @returns {AssertionError|boolean}
 */
export async function deeeeepEqual( logic_function ){

    let { expected, actual, error } = await logic_function()

    let assert = true

    try{
        error = ! error ? undefined : new Error( error )
        deepEqual(  actual, expected, error )

    }catch ( assertion_error ) {

        assert = assertion_error

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

    let { expected, actual, error } = await logic_function()

    let assert = true

    try{
        error = ! error ? undefined : new Error( error )
        notDeepEqual(  actual, expected, error )

    }catch ( assertion_error ) {

        assert = assertion_error

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

    let { expected, actual, error } = await logic_function()
    let assert = true

    try{
        error = ! error ? undefined : new Error( error )
        deepStrictEqual(  actual, expected, error )

    }catch ( assertion_error ) {

        assert = assertion_error

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

    let { expected, actual, error } = await logic_function()

    let assert = true

    try{
        error = ! error ? undefined : new Error( error )
        notDeepStrictEqual(  actual, expected, error )

    }catch ( assertion_error ) {

        assert = assertion_error

    }

    return assert
}




