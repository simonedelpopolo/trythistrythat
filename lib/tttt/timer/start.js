export let timer_started

/**
 * Object [ tttt.timer.start ]
 * hrtime time start.
 */
export default function timer_start() {
    timer_started = process.hrtime.bigint()
}
