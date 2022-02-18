import { entry_point, entry_pointSymbol } from './input/entry_point.js'
import { exit, exitSymbol } from './activity/exit.js'
import { process_title, process_titleSymbol } from './input/process_title.js'
import { shell_exit_codes, shellExitCodesSymbol } from './errors/shell.js'
import { stderr, stderrSymbol } from './activity/stderr.js'

// - extends
await import( './extends/String/toBuffer.js' )
await import( './extends/String/toNumber.js' )

export const entry_point__ = entry_point[ entry_pointSymbol ]
export const process_exit__ = exit[ exitSymbol ]
export const process_title__ = process_title[ process_titleSymbol ]
export const shell_exit_codes__ = shell_exit_codes[ shellExitCodesSymbol ]
export const stderr__ = stderr[ stderrSymbol ]
