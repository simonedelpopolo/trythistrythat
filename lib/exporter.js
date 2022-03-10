/**
 * Extends
 *
 * @private
 */
/**
 * A set of conversion utilities
 */
await import( './extends/String/conversion/toBuffer.js' )
await import( './extends/String/conversion/toNumber.js' )
/**
 * - stdout text decoration
 */
await import( './extends/String/decoration/strong.js' )
await import( './extends/String/decoration/underline.js' )
/**
 * - stdout text colors
 */
await import( './extends/String/color/fg/color.js' )
await import( './extends/String/color/fg/black.js' )
await import( './extends/String/color/fg/cyan.js' )
await import( './extends/String/color/fg/green.js' )
await import( './extends/String/color/fg/magenta.js' )
await import( './extends/String/color/fg/red.js' )
await import( './extends/String/color/fg/white.js' )
await import( './extends/String/color/fg/yellow.js' )
/**
 * - stdout background colors
 */
await import( './extends/String/color/bg/color.js' )
await import( './extends/String/color/bg/black.js' )
await import( './extends/String/color/bg/cyan.js' )
await import( './extends/String/color/bg/green.js' )
await import( './extends/String/color/bg/magenta.js' )
await import( './extends/String/color/bg/red.js' )
await import( './extends/String/color/bg/white.js' )
await import( './extends/String/color/bg/yellow.js' )

/**
 * JSDoc typedef
 *
 * @global
 */
/**
 * Represents an async function.
 *
 * @typedef {Function} AsyncFunction
 */

/**
 * Object [ activity ]
 *
 * @private
 */
export { default as exit__ } from './activity/exit.js'
export { default as stderr__ } from './activity/stderr.js'
export { default as exit_types__ } from './activity/exit/types.js'

/**
 * Object [ errors ]
 *
 * @private
 */
export { default as shell_exit_codes__ } from './errors/shell.js'

/**
 * Object [ input ]
 *
 * @private
 */
export { default as processor__ } from './input/processor.js'
export { default as entry_point__ } from './input/entry_point.js'
export { default as options__ } from './input/options.js'
export { default as process_title__ } from './input/process_title.js'

/**
 * Object [ tttt ]
 *
 * @private
 */
export { default as deeeeep__ } from './tttt/deeeeep.js'
export { default as queue__ } from './tttt/queue.js'
export { default as container__ } from './tttt/queue/container.js'
export { default as execute__ } from './tttt/queue/execute.js'
export { default as file__ } from './tttt/file.js'
export { default as loader__ } from './tttt/loader.js'
export { default as oki__ } from './tttt/oki.js'
export { default as output__ } from './tttt/output.js'
export { default as twd__ } from './tttt/twd.js'
export { default as unit__ } from './tttt/unit.js'
