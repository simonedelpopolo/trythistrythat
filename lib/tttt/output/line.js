import { number_ } from 'oftypes'
import { default as output } from '../output.js'

const lineSymbol = Symbol.for( 'Object [ tttt.output.line ]' )
const line = Object.defineProperty( output, lineSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.output.line ]
     * stdout new line.
     *
     * @param {number=} [repeat=undefined] - number of new lines.
     * @returns {Promise<void> | void}
     */
    value: async function line ( repeat = undefined ) {

        if ( ! repeat || repeat === 0 || repeat === 1 ) console.log()

        else if( await number_( repeat, undefined, undefined, false ) )
            for ( let line = 0; line < repeat; line++ ) console.log()
    }
} )

export default line[ lineSymbol ]
