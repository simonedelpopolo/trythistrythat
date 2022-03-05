import { EventEmitter } from 'events'
import { randomUUID } from 'crypto'
import tttt from '../tttt.js'

export const outputSymbol = Symbol( 'Object [ tttt.output ] prints the test results on stdout' )
export const output = Object.defineProperty( tttt, outputSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: {
        failed: false,
        timer: null,
        id: null,
        event: new EventEmitter(),
        stdout: ( ) => {
            
            internal_.id = randomUUID()
            
            internal_.timer = `|                  ${internal_.id}        |`.yellow()
            
            console.time( internal_.timer )
            
            console.log()
    
            internal_.separator()
            console.log( '| assert', ` ${internal_.id} `.yellow(), new Date(), ' |' )
            internal_.separator()
    
            console.log()
            
            internal_.event.on( internal_.id, () => {
        
                console.log()
                internal_.separator()
        
                console.timeEnd( internal_.timer )
    
                internal_.separator()
        
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
        describe: ( ...info ) => {
            console.info( ...info )
        },
        
        separator: () => {
            console.log( '---------------------------------------------------------------------------'.green().bg_black() )
        }
    },
} )

const internal_ = output[ outputSymbol ]
