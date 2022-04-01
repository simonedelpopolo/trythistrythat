import { ok } from 'node:assert'
import tttt from '../tttt.js'

const okiSymbol = Symbol( 'Object [ tttt.oki ]' )
const oki = Object.defineProperty( tttt, okiSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    value: async function oki( logic_function ){

        let { expected, actual, error } = await logic_function()
        let assert = true

        try{
            error = ! error ? undefined : new Error( error )
            ok( expected === actual, error )

        }catch ( assertion_error ) {

            assert = assertion_error

        }

        return assert

    },
} )

export default oki[ okiSymbol ]
