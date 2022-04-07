import tttt from '../tttt.js'

const twdSymbol = Symbol.for( 'Object [ tttt.twd ]' )
const twd = Object.defineProperty( tttt[ Symbol.for( 'tttt' ) ], twdSymbol, {
    enumerable: true,

    /**
     * Object [ tttt.twd ]
     * Object container.
     *
     * @type {Object}
     */
    value: {}
} )

export default twd[ twdSymbol ]
