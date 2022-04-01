import tttt from '../tttt.js'
import { deepEqual, deepStrictEqual, notDeepEqual, notDeepStrictEqual } from 'node:assert'

const deeeeepSymbol = Symbol( 'Object [ tttt.deeeeep ]' )
const deeeeep = Object.defineProperty( tttt, deeeeepSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    value: {
        equal: async ( logic_function ) => {

            let { expected, actual, error } = await logic_function()

            let assert = true

            try{
                error = ! error ? undefined : new Error( error )
                deepEqual(  actual, expected, error )

            }catch ( assertion_error ) {

                assert = assertion_error

            }

            return assert
        },

        notEqual: async ( logic_function ) => {

            let { expected, actual, error } = await logic_function()

            let assert = true

            try{
                error = ! error ? undefined : new Error( error )
                notDeepEqual(  actual, expected, error )

            }catch ( assertion_error ) {

                assert = assertion_error

            }

            return assert
        },

        strictEqual: async ( logic_function ) => {

            let { expected, actual, error } = await logic_function()
            let assert = true

            try{
                error = ! error ? undefined : new Error( error )
                deepStrictEqual(  actual, expected, error )

            }catch ( assertion_error ) {

                assert = assertion_error

            }

            return assert
        },

        notStrictEqual: async ( logic_function ) => {

            let { expected, actual, error } = await logic_function()

            let assert = true

            try{
                error = ! error ? undefined : new Error( error )
                notDeepStrictEqual(  actual, expected, error )

            }catch ( assertion_error ) {

                assert = assertion_error

            }

            return assert
        },
    },
} )

export default deeeeep[ deeeeepSymbol ]
