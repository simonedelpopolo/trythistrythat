import { Blaze } from '@cli-blaze/decors'
import { number_, string_ } from 'oftypes'

/**
 * Object [ tttt.output.separator ]
 * Draws a separator. Default cyan. Default length 75. Default char '-'.
 *
 * @param {number=} [color=undefined] - of the line ( range accepted [ 0-255 ] )
 * @param {number=} [length=75] - of the separator [no-length-limit]
 * @param {string=} [char='-'] - to be drawn as separator
 *                             - ( limited to these selection ['-','*','_','~'] )
 *                             - ( char.length === 1 no more no less )
 * @returns {Promise<void> | void}
 */
export default async function separator( color = undefined, length = 75, char = '-' ) {

    const collection = [
        '-',
        '*',
        '_',
        '~'
    ]

    const sign = await string_( char ) && char.length === 1 && char && collection.includes( char )

        ? char
        : '-'

    const separator_array = await number_( length, undefined, undefined, false )

        ? Array( length )
        : Array( 75 )

    const separator_text = separator_array.fill( sign, 0, separator_array.length ).join( '' )

    if( ! color ) console.log( Blaze.b_cyan( separator_text ) )

    else {
        if( await number_( color, undefined, undefined, false )
            && color >= 0 && color <= 255 )
            console.log( Blaze.color( color, separator_text ) )
        else
            console.log( separator_text )
    }

}
