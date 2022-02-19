import { loader } from '../../index.js'
import { output__ } from '../exporter.js'
import tttt from '../tttt.js'

export const fileSymbol = Symbol( 'Object [ tttt.file ] run assertion in the given file.' )
export const file = Object.defineProperty( tttt, fileSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * Object [ tttt.file ] loads the given assertion file and runs the test.
     *
     * @param {string} filename - the file to be run.
     * @returns {Promise<void>}
     */
    value: async function file( filename ){
    
        output__.stdout()
        
        await loader.set( filename )
        await loader.execute()
    
        output__.event.emit( 'end' )
    }
} )
