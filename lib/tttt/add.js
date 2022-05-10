import { randomUUID } from 'crypto'
import { unit_code } from './add/functions/text/unit-code.js'
import { writeFile } from 'node:fs/promises'

/**
 * Object [ tttt.add ]
 * adding unit test
 *
 * @param {{describe: string|null=,filename:string|null=,imports:string[]|string|null=,twd: string|null=}} options - from shell
 * @returns {Promise<void> | void}
 */
export default async function add( options ) {

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
