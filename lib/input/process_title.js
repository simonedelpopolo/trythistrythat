import input from '../input.js'
import { process_exit__ } from '../exporter.js'
import { shell_exit_codes__ } from '../exporter.js'

export const process_titleSymbol = Symbol( 'switch for process.title' )
export const process_title = Object.defineProperty( input, process_titleSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    value: async function* selector ( process_parsed_argv ){
        
        let error = false
        let no_process = false
        let returns
        
        switch( process.title ){
            
            case '4t': {
    
                const shell_options = {
                    command: false,
                    test: false
                }
    
                for ( const flag in process_parsed_argv.keys ) {
        
                    switch ( process_parsed_argv.keys[ flag ] ) {
            
                        case 'init': {
                
                            shell_options.command = 'init'
                
                            delete process_parsed_argv.object.init
                            process_parsed_argv.keys.splice( 0, 1 )
                
                            const initFlags = Object.keys( process_parsed_argv.object )
                
                            for ( const flag in initFlags ) {
                    
                                switch ( initFlags[ flag ] ) {
                        
                                    case 't':
                                    case 'test':
                            
                                        shell_options.test = process_parsed_argv.object[ initFlags[ flag ] ].toString()
                                        delete process_parsed_argv.object[ initFlags[ flag ] ]
                                        process_parsed_argv.keys.splice( 0, 1 )
                            
                                        break
                        
                                    default: {
                                        let error = `\x1b[41m        Object[ input.process_title ]: flag \`${ initFlags[ flag ] }\` not recognize\x1b[0m\n`
                                        error += `\x1b[41m        run -> ${ process.title } init help[h]        \x1b[0m\n`
                                        await process_exit__( error, new ReferenceError( `${ process.title } flags-error` ), shell_exit_codes__.flags )
                                    }
                                }
                            }
                
                            returns = shell_options
                
                        }
                            break
                        default: {
                
                            let error = `\x1b[41m        Object[ input.process_title ]: command \`${ process_parsed_argv.keys[ flag ] }\` not recognize\x1b[0m\n`
                            error += `\x1b[41m        run -> ${ process.title } help[h]        \x1b[0m\n`
                            await process_exit__( error, new ReferenceError( `${ process.title } commands-error` ), shell_exit_codes__.commands )
                        }
            
                    }
                }
            }
                
                break
            
            default:
                no_process = true
                break
        }
        
        yield new Promise( ( resolve, reject ) => {
            
            if( no_process ) {
                let error = `\x1b[41m        Object[ input.process_title ]: process.title -> \`${ process.title }\` not recognize\x1b[0m\n`
                process_exit__( error, new ReferenceError( 'internal-error' ), shell_exit_codes__.internal )
            }
            
            if( error )
                reject( error )
            
            resolve( returns )
            
        } )
        
    },
} )
