import { default as path } from './path.js'
import { default as twd } from '../twd.js'

const getSymbol = Symbol.for( 'Object [ tttt.twd.get ]' )
const get = Object.defineProperty( twd, getSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.twd.get ]
     * twd getter.
     *
     * @returns {ArrayBuffer}
     */
    value: function tttt_twd_get() {
        return path[ 0 ]
    }
} )

export default get[ getSymbol ]
