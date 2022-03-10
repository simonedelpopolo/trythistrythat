import { queue__ } from '../../exporter.js'

const containerSymbol = Symbol( 'Object [ tttt.queue.container ]' )
const container = Object.defineProperty( queue__, containerSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: []
} )

export default container[ containerSymbol ]
