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
     * @param {{describe: string|null=,filename:string|null=,imports:string[]|null=,twd: string|null=}} options - from shell
     * @returns {Promise<void> | void}
     */
    value: async function add( options ) {

        const describe = options.describe
        let filename = options.filename
        const imports = options.imports
        const twd = options.twd


        if( filename === null )
            filename = `${randomUUID()}.test.js`

        if( twd !== null )
            filename = `${twd}/${filename}`

        await writeFile( filename, unit_code( describe, filename, imports ) ).catch( ( error => {throw error} ) )
    }
} )

export default add[ addSymbol ]
