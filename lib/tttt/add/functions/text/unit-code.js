/**
 * Object [ tttt.add.functions.text.unit-code ]
 *
 * @param {string|null} describe - unit test
 * @param {string} filename - unit
 * @param {string[]|null} imports - module name
 * @returns {string}
 */
export function unit_code( describe, filename, imports ) {
    let imports_lines = ''
    if( imports !== null ) {

        for ( const module in imports )
            imports_lines += `import ${ imports[ module ][ 0 ] } from '${ imports[ module ][ 1 ] }'\n`

    }

    let describe_line = ''
    if( describe !== null )
        describe_line = describe

    return `import * as tttt from 'trythistrythat'
${imports_lines}
/**
 * Module filename - ${filename}
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# ${describe_line}' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    tttt.end_test( id )
}
`
}
