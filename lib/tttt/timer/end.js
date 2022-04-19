import { timer_started } from './start.js'

/**
 * Object [ tttt.timer.end ]
 * hrtime time end returned.
 *
 * @returns {string}
 */
export default function timer_end() {
    return String( Number( process.hrtime.bigint() - timer_started ) / 1_000_000 + 'ms' ).red()
}
