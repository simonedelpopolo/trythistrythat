#!/usr/bin/env node
import { entry_point } from './index.js'

// - splicing out from `process.argv` the paths for node and 4t.js
process.argv.splice( 0, 2 )

// - process.title
process.title = '4t'

/**
 * @type {Promise | {command:{test:{file: {filename: string, print: string}}}}}
 */
const digestive = await entry_point( process.argv )

// eslint-disable-next-line default-case
switch ( Object.entries( digestive.command )[ 0 ][ 0 ] ) {
    
    case  'test':
        
        ( ( options ) => {console.trace( options )} )( digestive.command.test )
        break
}
