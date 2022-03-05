import tttt from '../tttt.js'
import { deepEqual, deepStrictEqual, notDeepEqual, notDeepStrictEqual } from 'node:assert'

export const deeeeepSymbol = Symbol( 'Object [ tttt.deeeeep ] wrapper around node:assert:deepEqual&deepStrictEqual ' )
export const deeeeep = Object.defineProperty( tttt, deeeeepSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: {
        equal: async ( logic_function ) => {
            
            const { expected, actual, error } = await logic_function()
    
            let assert = true
    
            try{
                deepEqual(  actual, expected, new Error( error ) )
        
            }catch ( assertion_error ) {
        
                assert = assertion_error
        
            }
    
            return assert
        },
    
        notEqual: async ( logic_function ) => {
        
            const { expected, actual, error } = await logic_function()
        
            let assert = true
        
            try{
                notDeepEqual(  actual, expected, new Error( error ) )
            
            }catch ( assertion_error ) {
            
                assert = assertion_error
            
            }
        
            return assert
        },
        
        strictEqual: async ( logic_function ) => {
    
            const { expected, actual, error } = await logic_function()
            let assert = true
    
            try{
                deepStrictEqual(  actual, expected, new Error( error ) )
        
            }catch ( assertion_error ) {
        
                assert = assertion_error
        
            }
            
            return assert
        },
    
        notStrictEqual: async ( logic_function ) => {
        
            const { expected, actual, error } = await logic_function()
        
            let assert = true
        
            try{
                notDeepStrictEqual(  actual, expected, new Error( error ) )
            
            }catch ( assertion_error ) {
            
                assert = assertion_error
            
            }
        
            return assert
        },
    },
} )
