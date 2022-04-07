import tttt from '../tttt.js'

export let filename_unit_test
const loaderSymbol = Symbol.for( 'Object [ tttt.loader ]' )
const loader = Object.defineProperty( tttt[ Symbol.for( 'tttt' ) ], loaderSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    value: {},
} )

export default loader[ loaderSymbol ]
