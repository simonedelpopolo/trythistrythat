import { promise_ } from 'oftypes'
import tttt from '../tttt.js'
import { output__ } from '../exporter.js'

const dynamicFunction = {}

export const loaderSymbol = Symbol( 'Object [ tttt.loader ] dynamic importer of function declared in files into tttt.twd' )
export const loader = Object.defineProperty( tttt, loaderSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: {
        async set( filename ){
            
            dynamicFunction[ '0' ]  = ( await import( filename ) ).default
        },
        
        async execute(){
            if( await promise_( dynamicFunction[ '0' ] ) )
                await dynamicFunction[ '0' ]()
            else
                output__.event.emit( output__.id )
        }
    },
} )
