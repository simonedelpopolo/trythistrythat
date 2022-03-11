import { output__ } from '../exporter.js'
import { stat } from 'node:fs/promises'
import tttt from '../tttt.js'
import { execute, loader } from '../../index.js'

const fileSymbol = Symbol( 'Object [ tttt.file ]' )
const file = Object.defineProperty( tttt, fileSymbol, {
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
        
        output__.event.on( 'inserted', async ( id ) => {
            
            await execute( id )
        } )
        
        const is_dir = await stat( filename )
        if( ! ( is_dir.isDirectory() ) ) {
            output__.stdout()
            await loader.set( filename )
        }
        
    }
} )

export default file[ fileSymbol ]
