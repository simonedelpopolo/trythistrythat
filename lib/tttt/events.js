import { EventEmitter } from 'events'
import tttt from '../tttt.js'

const eventsSymbol = Symbol( 'Object [ tttt.events ]' )
const events = Object.defineProperty( tttt, eventsSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: {
        event: new EventEmitter( { captureRejections: true } )
        
    }
} )

export default events[ eventsSymbol ]

console.trace( events[ eventsSymbol ].event )
