import { default as timer } from '../timer.js'
import { timer_started } from './start.js'

const endSymbol = Symbol.for( 'Object [ tttt.timer.end ]' )
const end = Object.defineProperty( timer, endSymbol, {
    enumerable: true,

    /**
     * Object [ tttt.timer.end ]
     * hrtime time end returned.
     *
     * @returns {string}
     */
    value: function timer_end() {
        return String( Number( process.hrtime.bigint() - timer_started ) / 1_000_000 + 'ms' ).red()
    }
} )

export default end[ endSymbol ]
