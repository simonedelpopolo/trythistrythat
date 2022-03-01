import { EventEmitter } from 'events'
import tttt from '../tttt.js'

export const outputSymbol = Symbol( 'Object [ tttt.output ] prints the test results on stdout' )
export const output = Object.defineProperty( tttt, outputSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: {
        failed: false,
        timer: '|               \x1b[33massertion finished\x1b[0m                                |',
        event: new EventEmitter(),
        stdout: () => {
            console.time( internal_.timer )
            
            console.log()
            
            console.log( ' --------------------------------------------------------------------------' )
            console.log( '|               \x1b[33masserting started\x1b[0m', new Date(), '                |' )
            console.log( ' --------------------------------------------------------------------------' )
    
            console.log()
            
            internal_.event.on( 'end', () => {
        
                console.log()
                console.log( '---------------------------------------------------------------------------' )
        
                console.timeEnd( internal_.timer )
        
                console.log( '---------------------------------------------------------------------------' )
        
                if( internal_.failed )
                    process.exit( 1 )
            } )
        },
    
        /**
         * Describe the statements that are going to be executed.
         *
         * @param {string} info - .
         * @returns {Promise<void>}
         */
        describe: async ( ...info ) => {
            console.info( ...info )
        }
    },
} )

const internal_ = output[ outputSymbol ]