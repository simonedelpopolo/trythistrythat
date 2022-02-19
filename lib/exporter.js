import { entry_point, entry_pointSymbol } from './input/entry_point.js'
import { exit, exitSymbol } from './activity/exit.js'
import { file, fileSymbol } from './tttt/file'
import { options, optionsSymbol } from './input/options.js'
import { process_title, process_titleSymbol } from './input/process_title.js'
import { processor, processorSymbol } from './input/processor.js'
import { shell_exit_codes, shellExitCodesSymbol } from './errors/shell.js'
import { stderr, stderrSymbol } from './activity/stderr.js'
import { twd, twdSymbol } from './tttt/twd.js'

// - extends
await import( './extends/String/toBuffer.js' )
await import( './extends/String/toNumber.js' )

// Object [ input ]
export const entry_point__ = entry_point[ entry_pointSymbol ]
export const process_title__ = process_title[ process_titleSymbol ]
export const processor__ = processor[ processorSymbol ]
export const options__ = options[ optionsSymbol ]

// Object [ activity ]
export const process_exit__ = exit[ exitSymbol ]
export const stderr__ = stderr[ stderrSymbol ]

// Object [ errors ]
export const shell_exit_codes__ = shell_exit_codes[ shellExitCodesSymbol ]

// Object [ tttt ]
export const twd__ = twd[ twdSymbol ]
export const file__ = file[ fileSymbol ]
