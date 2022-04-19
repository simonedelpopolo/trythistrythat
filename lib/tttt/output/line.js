import { number_ } from 'oftypes'

/**
 * Object [ tttt.output.line ]
 * stdout new line.
 *
 * @param {number=} [repeat=undefined] - number of new lines.
 * @returns {Promise<void> | void}
 */
export default async function line ( repeat = undefined ) {

    if ( ! repeat || repeat === 0 || repeat === 1 ) console.log()

    else if( await number_( repeat, undefined, undefined, false ) )
        for ( let line = 0; line < repeat; line++ ) console.log()
}
