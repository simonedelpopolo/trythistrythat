import { EventEmitter } from 'events'
import { randomUUID } from 'crypto'
import tttt from '../tttt.js'

const outputSymbol = Symbol( 'Object [ tttt.output ]' )
const output = Object.defineProperty( tttt, outputSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    value: {
        failed: false,
        timer: null,
        id: null,
        event: new EventEmitter( { captureRejections:true } ),
        stdout: ( ) => {

            internal_.id = randomUUID()

            internal_.timer = `|                  ${internal_.id}        |`.yellow()

            console.time( internal_.timer )

            console.log()

            internal_.separator()
            console.log( '| assert', ` ${internal_.id} `.yellow(), new Date(), ' |' )
            internal_.separator()

            console.log()

            internal_.event.on( internal_.id, () => {

                console.log()
                internal_.separator()

                console.timeEnd( internal_.timer )

                internal_.separator()

                if( internal_.failed )
                    process.exit( 1 )
            } )
        },

        /**
         * Describe the statements that are going to be executed.
         *
         * @param {string} info - .
         */
        describe: ( ...info ) => {
            console.info( ...info )
        },

        /**
         * It draws a separator line.
         */
        separator: () => {
            console.log( '---------------------------------------------------------------------------'.green().bg_black() )
        },

        /**
         * It draws a new line or many as specified with the argument repeat.
         *
         *
         * @param {number|string=} [repeat=undefined] - number of new lines.
         */
        line: ( repeat ) => {

            if ( !repeat || repeat === 0 || repeat === 1 ) console.log()
            else if( repeat.constructor.name === 'Number' ) for ( let line = 0; line < repeat; line++ ) console.log()
        }
    },
} )

const internal_ = output[ outputSymbol ]

export default output[ outputSymbol ]
