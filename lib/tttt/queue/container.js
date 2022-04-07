import { default as queue } from '../queue.js'

const containerSymbol = Symbol.for( 'Object [ tttt.queue.container ]' )
const container = Object.defineProperty( queue, containerSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    value: { }
} )

export default container[ containerSymbol ]
