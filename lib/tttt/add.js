import { randomUUID } from 'crypto'
import tttt from '../tttt.js'
import { unit_code } from './add/functions/text/unit-code.js'
import { writeFile } from 'node:fs/promises'

const addSymbol = Symbol( 'Object [ tttt.add ]' )
const add = Object.defineProperty( tttt, addSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.add ]
     * adding unit test
     *
     * @param {{describe: string|null=,filename:string|null=,imports:string[]|string|null=,twd: string|null=}} options - from shell
     * @returns {Promise<void> | void}
     */
    value: async function add( options ) {

        const { describe, twd } = options
        let { filename, imports } = options

        if( filename === null )
            filename = `${randomUUID()}.test.js`

        if( twd !== null )
            filename = `${twd}/${filename}`

        if( imports !== null ) {
            for ( const module in imports )
                imports[ module ] = imports[ module ].split( '|' )
        }

        await writeFile( filename, unit_code( describe, filename, imports ) ).catch( ( error => {throw error} ) )
    }
} )

export default add[ addSymbol ]
