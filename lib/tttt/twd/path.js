import { default as twd } from '../twd.js'

const pathSymbol = Symbol.for( 'Object [ tttt.twd.path ]' )
const path = Object.defineProperty( twd, pathSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    /**
     * @type {ArrayBuffer[]}
     */
    value: []
} )

export default path[ pathSymbol ]
