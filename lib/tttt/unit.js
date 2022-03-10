import { output__ } from '../exporter.js'
import { stat } from 'node:fs/promises'
import tttt from '../tttt.js'
import { execute, loader, twd } from '../../index.js'

const unitSymbol = Symbol( 'Object [ tttt.unit ]' )
const unit = Object.defineProperty( tttt, unitSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     *
     * @param {string[]} dir_listing - array from readdir
     * @returns {Promise<void>}
     */
    value: async function unit( dir_listing ) {
    
        output__.event.on( 'inserted', async ( id ) => {
            await output__.stdout( id )
            await execute( id )
        } )
        
        const _twd = `${process.cwd()}/${await twd.get()}`
        for ( const unit in dir_listing ){
            const filename = `${_twd}/${dir_listing[ unit ]}`
            const is_dir = await stat( filename )
            if( ! ( is_dir.isDirectory() ) )
                await loader.set( filename )
        }
        
    }
} )

export default unit[ unitSymbol ]
