import { default as output } from '../output.js'

const describeSymbol = Symbol.for( 'Object [ tttt.output.describe ]' )
const describe = Object.defineProperty( output, describeSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.output.describe ]
     * Describes something, prints values, Object or simply whatever.
     *
     * @param {...*} info - to be printed to stdout
     */
    value: function describe ( ...info ) {
        console.info( ...info )
    }
} )

export default describe[ describeSymbol ]
