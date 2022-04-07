import tttt from '../tttt.js'

const timerSymbol = Symbol.for( 'Object [ tttt.timer ]' )
const timer = Object.defineProperty( tttt[ Symbol.for( 'tttt' ) ], timerSymbol, {
    enumerable: true,

    /**
     * Object [ tttt.timer ].
     * Object container.
     */
    value: {}
} )

export default timer[ timerSymbol ]
