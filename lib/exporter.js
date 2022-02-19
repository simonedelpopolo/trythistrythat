import { deeeeep, deeeeepSymbol } from './tttt/deeeeep.js'
import { entry_point, entry_pointSymbol } from './input/entry_point.js'
import { exit, exitSymbol } from './activity/exit.js'
import { file, fileSymbol } from './tttt/file.js'
import { loader, loaderSymbol } from './tttt/loader.js'
import { oki, okiSymbol } from './tttt/oki.js'
import { options, optionsSymbol } from './input/options.js'
import { output, outputSymbol } from './tttt/output.js'
import { process_title, process_titleSymbol } from './input/process_title.js'
import { processor, processorSymbol } from './input/processor.js'
import { shell_exit_codes, shellExitCodesSymbol } from './errors/shell.js'
import { stderr, stderrSymbol } from './activity/stderr.js'
import { twd, twdSymbol } from './tttt/twd.js'

// - extends
await import( './extends/String/toBuffer.js' )
await import( './extends/String/toNumber.js' )
await import( './extends/String/red.js' )
await import( './extends/String/green.js' )

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
export const loader__ = loader[ loaderSymbol ]
export const output__ = output[ outputSymbol ]

// Object [ tttt.oki ]
export const oki__ = oki[ okiSymbol ]
export const deeeeep__ = deeeeep[ deeeeepSymbol ]
