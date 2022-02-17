import input from '../input.js'
import { process_exit__ } from '../exporter.js'
import { shell_exit_codes__ } from '../exporter.js'

export const process_titleSymbol = Symbol( 'switch for process.title' )
export const process_title = Object.defineProperty( input, process_titleSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * Switches process.title returning an object containing command, flags and options to be digested.
     * The returned Promise always resolves.
     *
     * @param {{object:{[p: string]: any}, keys:string[]}} process_parsed_argv - Object.
     * @yields
     * @returns {AsyncGenerator<Promise<{command: {[p:object]:any}}>>}
     */
    value: async function* selector ( process_parsed_argv ){
        
        let process_title_not_recognize = false
        let returns
        
        switch( process.title ){
            
            case '4t': {
    
                /**
                 * @type {{command: {test: {init: boolean}}}}
                 */
                const options = {
                    command: { test:{
                        init: false
                    } }
                }
    
                for ( const flag in process_parsed_argv.keys ) {
        
                    switch ( process_parsed_argv.keys[ flag ] ) {
            
                        case 'test': {
                
                            delete process_parsed_argv.object.test
                            process_parsed_argv.keys.splice( 0, 1 )
                
                            const initFlags = Object.keys( process_parsed_argv.object )
                
                            for ( const flag in initFlags ) {
                    
                                switch ( initFlags[ flag ] ) {
                        
                                    case 'file':
                            
                                        options.command.test.init = process_parsed_argv.object[ initFlags[ flag ] ].toString()
                                        
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
                
                            returns = options
                
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
                process_title_not_recognize = true
                
                break
        }
    
        if( process_title_not_recognize ) {
            let error = `\x1b[41m        Object[ input.process_title ]: process.title -> \`${ process.title }\` not recognize\x1b[0m\n`
            await process_exit__( error, new ReferenceError( 'internal-error' ), shell_exit_codes__.internal )
        }
        
        yield new Promise( ( resolve ) => {
            
            resolve( returns )
            
        } )
        
    },
} )
