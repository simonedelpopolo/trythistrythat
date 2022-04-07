import { default as output } from '../output.js'

const failedSymbol = Symbol.for( 'Object [ tttt.output.failed ]' )
const failed = Object.defineProperty( output, failedSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.output.failed ]
     * UNIT test failure.
     *
     * @returns {boolean[]}
     */
    value: [ false ]
} )

export default failed[ failedSymbol ]
