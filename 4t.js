#!/usr/bin/env node
import { entry_point, file, twd, unit } from './index.js'

// - splicing out from `process.argv` the paths for node and 4t.js
process.argv.splice( 0, 2 )

// - process.title
process.title = '4t'

/**
 * @type {Promise | {
 * command:{
 *   test:{
 *     file: {
 *       filename: string,
 *       print: string
 *     }
 *   },
 *   unit:string[]
 * }}}
 */
const digestive = await entry_point( process.argv )

// eslint-disable-next-line default-case
switch ( Object.entries( digestive.command )[ 0 ][ 0 ] ) {

    case  'test':


        ( async ( options ) => {

            // eslint-disable-next-line default-case
            switch( Object.entries( options )[ 0 ][ 0 ] ){

                case 'file': {

                    const filename = `${ process.cwd() }/${ await twd.get() }/${ options.file.filename }`
                    await file( filename )

                }

                    break

            }
        } )( digestive.command.test )

        break

    case 'unit':

        ( async ( dir_listing ) => {

            await unit( dir_listing )


        } )( digestive.command.unit )

        break


}
