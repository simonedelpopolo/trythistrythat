import { default as timer } from '../timer.js'

export let timer_started

const startSymbol = Symbol.for( 'Object [ tttt.timer.start ]' )
const start = Object.defineProperty( timer, startSymbol, {
    enumerable: true,

    /**
     * Object [ tttt.timer.start ]
     * hrtime time start.
     */
    value: function timer_start() {
        timer_started = process.hrtime.bigint()
    }
} )

export default start[ startSymbol ]
