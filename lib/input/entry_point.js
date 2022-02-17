import input from '../input.js'
import { process_title } from '../../index.js'

export const entry_pointSymbol = Symbol( 'shared entry point for every shell process' )
export const entry_point = Object.defineProperty( input, entry_pointSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * Shared entry point for the available executable files.
     * Its return an object from the given process.argv.
     * Object [input.process_title] elaborates commands, flags and options dispatching to the right process switching the process.title.
     *
     * @param {string[]} args - The process.argv passed to the process.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return#using_return
     * @returns {{{command: {test: {init: boolean}}}}} - return the return of the async function generator to set it "done" and free resources.
     */
    value: async function entry_point( args ){
        
        // - todo error handling for reg_expression
        const regExpression = /\s*[^-\s](?![-])[.?]*[=]*[.?]*\S*/g
        const argumentsString = args.join( ' ' )
        
        let process_arguments = []
        const matches = Array.from( argumentsString.matchAll( regExpression ), matches => matches[ 0 ] )
        
        // - todo error handling for the matches
        for ( const index in matches )
            process_arguments.push( matches[ index ].replaceAll( '-', '_' ).split( '=' ) )
        
        const process_argumentsObject = Object.fromEntries( process_arguments )
        const process_arguments_ObjectKeys = Object.keys( process_argumentsObject )
        
        // - input.process_title is an async function generator
        const process_title_switcher = await process_title( {
            object: process_argumentsObject,
            keys: process_arguments_ObjectKeys
        } )
        
        // - save the yield
        const done = await process_title_switcher.next()
        
        // - return the return of the async function generator to set it "done" and free resources.
        return process_title_switcher.return( done.value )
            .then( object => object.value )
        
    },
} )
