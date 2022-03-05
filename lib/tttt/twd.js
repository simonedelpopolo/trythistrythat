import { constants } from 'node:fs'
import tttt from '../tttt.js'
import { access, stat } from 'node:fs/promises'

let directory = 'assertions'

export const twdSymbol = Symbol( 'Object [ tttt.twd ] tests working directory' )
export const twd = Object.defineProperty( tttt, twdSymbol, {
    enumerable: true,
    
    /**
     * Object [ tttt.twd ].
     *
     * @type {{set: ((function(string): AsyncGenerator<any, void, any>)), get(): Promise<string>}}
     */
    value: {
    
        /**
         * Object [tttt.twd.set()] tests working directory.
         *
         * @param {string} path - Location, absolute or relative to process.cwd()
         * @yields
         * @returns {AsyncGenerator<any, void, any>}
         */
        set: async function* set( path ){
        
            let error = await access( path, constants.F_OK | constants.R_OK |constants.W_OK ).catch( error => error )
            
            yield typeof error !== 'undefined'
                
                ? Promise.reject( {
                    Object: '[ tttt.twd.set() ]',
                    path: `${process.cwd()}/${path}`,
                    [ error.code ]: 'file permissions not satisfied',
                    permissions:  `0o${( await stat( path ).then( async stat => stat.mode )
                        .catch( () => null ) & 0o777 ).toString( 8 )}`
                    
                } )
                
                : directory = path
            
        },
        async get(){
            
            return directory
        }
    }
} )
