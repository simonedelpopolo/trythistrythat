import tttt from '../tttt.js'

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
            
            await dynamicFunction[ '0' ]()
        }
    },
} )
