import errors from '../errors.js'

export const shellExitCodesSymbol = Symbol( 'process.exit codes' )
export const shell_exit_codes = Object.defineProperty( errors, shellExitCodesSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * @type { { commands:1, flags:2, type_checking:3, internal_error: 4} }
     */
    value: {
        commands: 1,
        flags: 2,
        type_checking: 3,
        internal_error: 4
    }
} )
