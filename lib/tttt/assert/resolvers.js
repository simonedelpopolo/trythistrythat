/**
 * Resolvers for node:assert wrapped function.
 *
 * @param {any} actual - value
 * @param {any} expected - value
 * @param {string} [error_message=undefined] - custom for AssertionError
 * @returns {Object<actual:any,expected:any,error_message:string>}
 */
export default function resolvers( actual, expected, error_message = undefined ){

  return {
    actual: actual,
    expected: expected,
    error_message: error_message
  }
}
