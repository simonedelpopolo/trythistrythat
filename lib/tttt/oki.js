import { ok } from 'node:assert'
import { promisify } from 'node:util'
import tttt from '../tttt.js'

const ok_ = promisify( ok )

export const okiSymbol = Symbol( 'Object [ tttt.oki ] wrapper for node:assert:ok' )
export const oki = Object.defineProperty( tttt, okiSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: async function oki( logic_function ){
    
        const { expected, actual, error } = await logic_function()
        
        ok( expected === actual, Error( error ) )
        const oki_ = await ok_( expected === actual, Error( error ) )
    
        console.trace( oki_ instanceof Error ? oki_ : true )
        
        return oki_ instanceof Error ? oki_ : true
    
    },
} )
