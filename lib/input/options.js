import input from '../input.js'
import { property_value } from 'json-swiss-knife'

export const optionsSymbol = Symbol( 'Object [ input.options] shell options parser' )
export const options = Object.defineProperty( input, optionsSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * Object [ input.options ] parses, if any, the options given to the flag.
     *
     * @param { string }flag_value - the flag value passed to cli.
     * @returns { Promise<{ [ p:string ]:{ [ p:string ], any} }> }
     */
    value: async function options( flag_value ){
        
        let options = flag_value
        
        if( typeof flag_value === 'string' ) {
            const options_reg_expression = /\(([^)]+)\)/g
            const matches = Array.from( flag_value.matchAll( options_reg_expression ), matches => matches[ 1 ] )
            if ( matches.length > 0 )
                options = await property_value( matches[ 0 ].split( ':' ), true ).catch( error => {return { error: new Error( error ) }} )
        }
        
        return new Promise( resolve => {
            resolve( options )
        } )
    }
} )
