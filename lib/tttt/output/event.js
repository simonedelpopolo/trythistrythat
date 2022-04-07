import { EventEmitter } from 'events'
import { default as output } from '../output.js'

const eventSymbol = Symbol.for( 'Object [ tttt.output.event ]' )
const event = Object.defineProperty( output, eventSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.output.event ] emitter.
     *
     * @type {EventEmitter}
     */
    value: new EventEmitter()

} )

export default event[ eventSymbol ]

