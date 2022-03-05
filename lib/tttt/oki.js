import { ok } from 'node:assert'
import tttt from '../tttt.js'

export const okiSymbol = Symbol( 'Object [ tttt.oki ] wrapper for node:assert:ok' )
export const oki = Object.defineProperty( tttt, okiSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: async function oki( logic_function ){
    
        const { expected, actual, error } = await logic_function()
        let assert = true
        
        try{
            ok( expected === actual, new Error( error ) )
            
        }catch ( assertion_error ) {
            
            assert = assertion_error
            
        }
        
        return assert
    
    },
} )
